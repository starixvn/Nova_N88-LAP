using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.Extension.Utility;
using NUnit.Framework;

namespace Fanex.Athena.Extension.UnitTests.Utility
{
    [TestFixture]
    public class SortableListTest
    {
        public class TestItem
        {
            public string Name { get; set; }
            public int Value { get; set; }
            public DateTime Date { get; set; }
            public Dictionary<string, string> Properties { get; set; } = new Dictionary<string, string>();
        }

        [Test]
        public void Sort_ByStringProperty_Ascending_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Charlie", Value = 3 },
                new TestItem { Name = "Alice", Value = 1 },
                new TestItem { Name = "Bob", Value = 2 }
            };

            // Act
            list.Sort("Name", true);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Name, Is.EqualTo("Alice"));
                Assert.That(list[1].Name, Is.EqualTo("Bob"));
                Assert.That(list[2].Name, Is.EqualTo("Charlie"));
            });
        }

        [Test]
        public void Sort_ByStringProperty_Descending_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Alice", Value = 1 },
                new TestItem { Name = "Bob", Value = 2 },
                new TestItem { Name = "Charlie", Value = 3 }
            };

            // Act
            list.Sort("Name", false);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Name, Is.EqualTo("Charlie"));
                Assert.That(list[1].Name, Is.EqualTo("Bob"));
                Assert.That(list[2].Name, Is.EqualTo("Alice"));
            });
        }

        [Test]
        public void Sort_ByIntProperty_Ascending_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Item3", Value = 30 },
                new TestItem { Name = "Item1", Value = 10 },
                new TestItem { Name = "Item2", Value = 20 }
            };

            // Act
            list.Sort("Value", true);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Value, Is.EqualTo(10));
                Assert.That(list[1].Value, Is.EqualTo(20));
                Assert.That(list[2].Value, Is.EqualTo(30));
            });
        }

        [Test]
        public void Sort_SamePropertySameDirection_TogglesDirection()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Alice", Value = 1 },
                new TestItem { Name = "Bob", Value = 2 },
                new TestItem { Name = "Charlie", Value = 3 }
            };

            // First sort ascending
            list.Sort("Name", true);
            Assert.That(list[0].Name, Is.EqualTo("Alice"));

            // Act - Sort same property, same direction (should toggle to descending)
            list.Sort("Name", true);

            // Assert
            Assert.That(list[0].Name, Is.EqualTo("Charlie"));
        }

        [Test]
        public void Sort_DifferentProperty_DoesNotToggle()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Charlie", Value = 1 },
                new TestItem { Name = "Alice", Value = 3 },
                new TestItem { Name = "Bob", Value = 2 }
            };

            // First sort by Name ascending
            list.Sort("Name", true);
            Assert.That(list[0].Name, Is.EqualTo("Alice"));

            // Act - Sort by different property
            list.Sort("Value", true);

            // Assert - Should sort by Value ascending (not toggle)
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Value, Is.EqualTo(1));
                Assert.That(list[1].Value, Is.EqualTo(2));
                Assert.That(list[2].Value, Is.EqualTo(3));
            });
        }

        [Test]
        public void Sort_TwoProperties_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Bob", Value = 2 },
                new TestItem { Name = "Alice", Value = 3 },
                new TestItem { Name = "Alice", Value = 1 },
                new TestItem { Name = "Bob", Value = 1 }
            };

            // Act - Sort by Name ascending, then by Value descending
            list.Sort("Name", true, "Value", false);

            // Assert
            Assert.Multiple(() =>
            {
                // Alice items first (Name ascending)
                Assert.That(list[0].Name, Is.EqualTo("Alice"));
                Assert.That(list[0].Value, Is.EqualTo(3)); // Higher value first (descending)
                Assert.That(list[1].Name, Is.EqualTo("Alice"));
                Assert.That(list[1].Value, Is.EqualTo(1)); // Lower value second

                // Bob items second (Name ascending)
                Assert.That(list[2].Name, Is.EqualTo("Bob"));
                Assert.That(list[2].Value, Is.EqualTo(2)); // Higher value first (descending)
                Assert.That(list[3].Name, Is.EqualTo("Bob"));
                Assert.That(list[3].Value, Is.EqualTo(1)); // Lower value second
            });
        }

        [Test]
        public void Sort_DateTimeProperty_SortsCorrectly()
        {
            // Arrange
            var date1 = new DateTime(2023, 1, 1);
            var date2 = new DateTime(2023, 6, 1);
            var date3 = new DateTime(2023, 12, 1);

            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "Item2", Date = date2 },
                new TestItem { Name = "Item3", Date = date3 },
                new TestItem { Name = "Item1", Date = date1 }
            };

            // Act
            list.Sort("Date", true);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Date, Is.EqualTo(date1));
                Assert.That(list[1].Date, Is.EqualTo(date2));
                Assert.That(list[2].Date, Is.EqualTo(date3));
            });
        }

        [Test]
        public void SortByDictionary_WithValidKey_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem {
                    Name = "Item1",
                    Properties = new Dictionary<string, string> { { "Priority", "High" } }
                },
                new TestItem {
                    Name = "Item2",
                    Properties = new Dictionary<string, string> { { "Priority", "Low" } }
                },
                new TestItem {
                    Name = "Item3",
                    Properties = new Dictionary<string, string> { { "Priority", "Medium" } }
                }
            };

            // Act
            list.SortByDictionary("Priority", "Properties", true);

            // Assert - Should sort alphabetically: High, Low, Medium
            Assert.Multiple(() =>
            {
                Assert.That(list[0].Properties["Priority"], Is.EqualTo("High"));
                Assert.That(list[1].Properties["Priority"], Is.EqualTo("Low"));
                Assert.That(list[2].Properties["Priority"], Is.EqualTo("Medium"));
            });
        }

        [Test]
        public void SortByDictionary_TwoProperties_SortsCorrectly()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem {
                    Name = "ItemB",
                    Value = 2,
                    Properties = new Dictionary<string, string> { { "Category", "A" } }
                },
                new TestItem {
                    Name = "ItemA",
                    Value = 1,
                    Properties = new Dictionary<string, string> { { "Category", "A" } }
                },
                new TestItem {
                    Name = "ItemC",
                    Value = 3,
                    Properties = new Dictionary<string, string> { { "Category", "B" } }
                }
            };

            // Act - Sort by Category (dictionary) ascending, then by Value descending
            list.SortByDictionary("Category", "Properties", true, "Value", false);

            // Assert
            Assert.Multiple(() =>
            {
                // Category A items first
                Assert.That(list[0].Properties["Category"], Is.EqualTo("A"));
                Assert.That(list[0].Value, Is.EqualTo(2)); // Higher value first
                Assert.That(list[1].Properties["Category"], Is.EqualTo("A"));
                Assert.That(list[1].Value, Is.EqualTo(1)); // Lower value second

                // Category B items last
                Assert.That(list[2].Properties["Category"], Is.EqualTo("B"));
                Assert.That(list[2].Value, Is.EqualTo(3));
            });
        }

        [Test]
        public void Sort_EmptyList_DoesNotThrow()
        {
            // Arrange
            var list = new SortableList<TestItem>();

            // Act & Assert
            Assert.DoesNotThrow(() => list.Sort("Name", true));
            Assert.DoesNotThrow(() => list.Sort("Name", true, "Value", false));
            Assert.DoesNotThrow(() => list.SortByDictionary("key", "Properties", true));
        }

        [Test]
        public void Sort_SingleItem_DoesNotThrow()
        {
            // Arrange
            var list = new SortableList<TestItem>
            {
                new TestItem { Name = "SingleItem", Value = 42 }
            };

            // Act & Assert
            Assert.DoesNotThrow(() => list.Sort("Name", true));
            Assert.That(list[0].Name, Is.EqualTo("SingleItem"));
        }
    }
}