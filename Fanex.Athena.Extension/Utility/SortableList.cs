namespace Fanex.Athena.Extension.Utility
{
    using System.Collections.Generic;
    using System.ComponentModel;

    public class SortableList<T> : List<T>
    {
        private string _propertyName;
        private bool _ascending;

        public void SortByDictionary(object key, string propertyName, bool ascending)
        {
            UpdateSortingData(propertyName, ascending);

            var comparer = new DictionaryPropertyComparer<T>(key, _propertyName, ascending ? ListSortDirection.Ascending : ListSortDirection.Descending);
            this.Sort(comparer);
        }

        public void SortByDictionary(object key, string dicPropertyName, bool dicAscending, string propName, bool propAscending)
        {
            UpdateSortingData(dicPropertyName, dicAscending);

            var comparer = new DictionaryPropertyComparer<T>(
                key,
                _propertyName,
                dicAscending ? ListSortDirection.Ascending : ListSortDirection.Descending,
                propName,
                propAscending ? ListSortDirection.Ascending : ListSortDirection.Descending);
            this.Sort(comparer);
        }
        
        public void Sort(string propertyName, bool ascending)
        {
            UpdateSortingData(propertyName, ascending);

            var comparer = new PropertyComparer<T>(propertyName, _ascending ? ListSortDirection.Ascending : ListSortDirection.Descending);
            this.Sort(comparer);
        }

        public void Sort(string firstPropertyName, bool firstAscending, string secondPropertyName, bool secondAscending)
        {
            UpdateSortingData(firstPropertyName, firstAscending);

            var comparer = new PropertyComparer<T>(
                firstPropertyName,
                _ascending ? ListSortDirection.Ascending : ListSortDirection.Descending,
                secondPropertyName,
                secondAscending ? ListSortDirection.Ascending : ListSortDirection.Descending);
            this.Sort(comparer);
        }

        private void UpdateSortingData(string propertyName, bool ascending)
        {
            if (_propertyName == propertyName && _ascending == ascending)
            {
                _ascending = !ascending;
            }
            else
            {
                _propertyName = propertyName;
                _ascending = ascending;
            }
        }
    }
}