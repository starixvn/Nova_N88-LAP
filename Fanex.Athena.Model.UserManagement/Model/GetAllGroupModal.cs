namespace Fanex.Athena.Model.UserManagement.Model
{
    public class GetAllGroupModal
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public string GroupName { get; set; }
        public int TotalRows { get; set; }
    }
}