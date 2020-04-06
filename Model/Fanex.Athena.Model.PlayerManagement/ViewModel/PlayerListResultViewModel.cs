using System.Collections.Generic;
using Fanex.Athena.Model.PlayerManagement.DTO;

namespace Fanex.Athena.Model.PlayerManagement.ViewModel
{
    public class PlayerListResultViewModel
    {
        public IEnumerable<Player> DataList { get; set; }

        public int TotalItem { get; set; }
    }
}