using System;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public class FunctionData
    {
        public short FunctionId { get; set; }
        public string FunctionName { get; set; }
        public string FunctionKey { get; set; }
        public string Description { get; set; }
        public byte CRUD { get; set; }
        public short DisplayOrder { get; set; }
        public bool IsActive { get; set; }
        public byte SiteId { get; set; }
        public string SiteName { get; set; }
        public short ParentId { get; set; }
        public string ParentName { get; set; }
        public int Policy { get; set; }
        public int CreatorId { get; set; }
        public string CreatorUsername { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ModifierId { get; set; }
        public string ModifierUsername { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
