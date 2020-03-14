namespace Fanex.Athena.Model.PlayerManagement.Constants
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.PlayerManagement.DTO;

    public static class PlayerAdminTab
    {
        public static IList<PlayerTabItem> CommonTabList => new List<PlayerTabItem>
        {
            new PlayerTabItem { Name = "lblPlayerAdminPlayerStatement", Text = "Statement", Action = "/PlayerStatement" }
        };
    }
}