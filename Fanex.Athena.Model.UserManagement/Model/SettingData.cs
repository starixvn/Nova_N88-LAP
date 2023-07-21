using System;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public class SettingData
    {
        public string SettingKey { get; set; }

        public string SettingValue { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int CreatorId { get; set; }

        public string CreatorUsername { get; set; }

        public int ModifierId { get; set; }

        public string ModifierUsername { get; set; }
    }
}