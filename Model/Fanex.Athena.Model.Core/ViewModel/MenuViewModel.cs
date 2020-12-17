// -----------------------------------------------------------------------
// <copyright file="MenuViewModel.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Model.Core.ViewModel
{
    using System;
    using System.Collections.Generic;
    using Fanex.N88.Core.Models;

    [CLSCompliant(false)]
    public class MenuViewModel
    {
        public MenuViewModel()
        {
            MenuItems = new List<MenuItem>();
        }

        public IList<MenuItem> MenuItems { get; set; }
    }
}