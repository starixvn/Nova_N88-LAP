namespace Fanex.Athena.Model.PlayerManagement.Constants
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.PlayerManagement.DTO;
    using Fanex.Athena.Resources;

    public static class PlayerAdminTab
    {
        public static IList<PlayerTabItem> CommonTabList => new List<PlayerTabItem>
        {
            new PlayerTabItem { Name = "lblPlayerAdminPlayerStatement", Text = ViewResources.Statement, Action = "PlayerStatement" }
        };
    }
}