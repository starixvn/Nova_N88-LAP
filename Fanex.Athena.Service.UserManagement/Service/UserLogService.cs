namespace Fanex.Athena.Service.UserManagement.Service
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Xml.Linq;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Enum;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;

    public class UserLogService : IUserLogService
    {
        private readonly ICommonRepository commonRepository;

        public UserLogService(ICommonRepository commonRepository)
        {
            this.commonRepository = commonRepository;
        }

        public IEnumerable<UserLoginLog> GetAllLoginLog(GetAllLogUserLoginCriteria criteria)
        {
            return commonRepository.FetchData<UserLoginLog>(criteria);
        }

        public IEnumerable<LogExecSp> GetExecSPLog(GetAllLogCriteria criteria)
        {
            return FilterLogExecSp(commonRepository.FetchData<LogExecSp>(criteria));
        }

        public LogExecSp GetById(int logId)
        {
            var criteria = new GetByIdLogCriteria
            {
                LogId = logId
            };

            if (criteria.IsValid())
            {
                LogExecSp logExec = this.commonRepository.FetchData<LogExecSp>(criteria).FirstOrDefault();

                if (!object.ReferenceEquals(logExec, null))
                {
                    Hashtable hashItems = LogExecSpGetHashItems(logExec);

                    Hashtable hashSubItems = LogExecSpGetHashSubItems(logExec);

                    LogExecSpData(ref logExec, hashItems, hashSubItems);

                    LogExecSpOldData(ref logExec, hashItems, hashSubItems);
                }

                return logExec;
            }

            return null;
        }

        private static Hashtable LogExecSpGetHashItems(LogExecSp logExec)
        {
            var hashItems = new Hashtable();

            if (!string.IsNullOrWhiteSpace(logExec.Items))
            {
                XDocument xmlItems = XDocument.Parse(logExec.Items);
                IEnumerable<XElement> xmlItemRows = xmlItems.Descendants("row");

                foreach (XElement item in xmlItemRows)
                {
                    string alias = item.Attribute("alias").Value;
                    if (!hashItems.Contains(alias))
                    {
                        hashItems.Add(alias, item.Attribute("item").Value);
                    }
                }
            }

            return hashItems;
        }

        private static Hashtable LogExecSpGetHashSubItems(LogExecSp logExec)
        {
            var hashSubItems = new Hashtable();

            if (!string.IsNullOrWhiteSpace(logExec.SubItems))
            {
                XDocument xmlItems = XDocument.Parse(logExec.SubItems);
                IEnumerable<XElement> xmlItemRows = xmlItems.Descendants("row");

                foreach (XElement item in xmlItemRows)
                {
                    string alias = item.Attribute("alias").Value;
                    if (!hashSubItems.Contains(alias))
                    {
                        hashSubItems.Add(alias, item.Attribute("item").Value);
                    }
                }
            }

            return hashSubItems;
        }

        private static void LogExecSpData(ref LogExecSp logExec, Hashtable hashItems, Hashtable hashSubItems)
        {
            if (!string.IsNullOrWhiteSpace(logExec.Data))
            {
                XDocument xmlData = XDocument.Parse(logExec.Data);
                var xmlElementData = new XElement("ROOT");

                if (hashItems.Count > 0)
                {
                    XmlElementDataHashItems(hashItems, xmlData, ref xmlElementData);
                }

                if (hashSubItems.Count > 0)
                {
                    XmlElementDataHashSubItems(hashSubItems, xmlData, ref xmlElementData);
                }

                logExec.Data = xmlElementData.ToString();
            }
        }

        private static void LogExecSpOldData(ref LogExecSp logExec, Hashtable hashItems, Hashtable hashSubItems)
        {
            if (!string.IsNullOrWhiteSpace(logExec.OldData))
            {
                XDocument xmlData = XDocument.Parse(logExec.OldData);
                var xmlElementData = new XElement("ROOT");

                if (hashItems.Count > 0)
                {
                    XmlElementDataHashItems(hashItems, xmlData, ref xmlElementData);
                }

                if (hashSubItems.Count > 0)
                {
                    XmlElementDataHashSubItems(hashSubItems, xmlData, ref xmlElementData);
                }

                logExec.OldData = xmlElementData.ToString();
            }
        }

        private static void XmlElementDataHashItems(Hashtable hashItems, XDocument xmlData, ref XElement xmlElementData)
        {
            foreach (DictionaryEntry item in hashItems)
            {
                XAttribute attribute = xmlData.Root.Attribute(item.Key.ToString());
                string value = attribute != null ? attribute.Value : string.Empty;

                xmlElementData.SetAttributeValue(item.Value.ToString(), value);
            }
        }

        private static void XmlElementDataHashSubItems(Hashtable hashSubItems, XDocument xmlData, ref XElement xmlElementData)
        {
            var xmlElementValue = new XElement("ROW");
            IEnumerable<XElement> xmlElementSubData = xmlData.Descendants("z");

            foreach (XElement item in xmlElementSubData)
            {
                var xmlElementChildTemp = new XElement("ITEM");
                foreach (DictionaryEntry itemAtt in hashSubItems)
                {
                    XAttribute attribute = item.Attribute(itemAtt.Key.ToString());
                    var value = attribute != null ? attribute.Value : string.Empty;

                    xmlElementChildTemp.SetAttributeValue(itemAtt.Value.ToString(), value);
                }

                xmlElementValue.Add(xmlElementChildTemp);
            }

            xmlElementData.SetAttributeValue("Value", EncodeXMLValue(xmlElementValue.ToString()));
        }

        private static string EncodeXMLValue(string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                value = value.Replace("&", "&amp;");
                value = value.Replace("<", "&lt;");
                value = value.Replace(">", "&gt;");
                value = value.Replace("\"", "&quot;");
                value = value.Replace("''", "&apos;");

                return value;
            }

            return value;
        }

        private static IEnumerable<LogExecSp> FilterLogExecSp(IEnumerable<LogExecSp> data)
        {
            return data
                .Select(l =>
                {
                    if (l.ActionId == (short)LogAction.N88_User_UpdateSite)
                    {
                        l.ActionName = "Update user status";
                    }

                    return l;
                });
        }
    }
}