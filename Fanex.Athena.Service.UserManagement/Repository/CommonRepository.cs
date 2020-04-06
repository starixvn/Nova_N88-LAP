using System;
using System.Collections;
using System.Collections.Generic;
using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
using Fanex.Data;
using Fanex.Data.Repository;

namespace Fanex.Athena.Service.UserManagement.Repository
{
    public class CommonRepository : ICommonRepository
    {
        public IEnumerable<T> FetchData<T>(ICriteria criteria)
        {
            using (var db = ObjectDbFactory.CreateInstance(criteria.GetSettingKey()))
            {
                var data = db.Query<T>(criteria);
                return data;
            }
        }

        public CommandResult ExecuteNonQueryAsync(INonQueryCommand command)
        {
            using (var db = ObjectDbFactory.CreateInstance(command.GetSettingKey()))
            {
                db.ExecuteNonQuery(command);
                CommandResult commandResult = GetCommandResult(db.GetOutputParams());

                return commandResult;
            }
        }

        private CommandResult GetCommandResult(Hashtable hash)
        {
            var errCode = hash["Error"];
            var errMsg = hash["Message"];

            return new CommandResult
            {
                Error = (errCode is DBNull) ? 0 : Convert.ToInt32(errCode),
                Message = (errMsg is DBNull) ? string.Empty : Convert.ToString(errMsg)
            };
        }
    }
}
