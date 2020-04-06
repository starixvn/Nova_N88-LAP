namespace Fanex.Athena.Model.UserManagement.Model
{
    public class CommandResult
    {
        public CommandResult()
        {
            Error = 1;
            Message = "Invalid Data";
        }

        public bool IsSuccessful
        {
            get
            {
                return Error == 0;
            }
        }

        public int Error { get; set; }

        public string Message { get; set; }
    }
}
