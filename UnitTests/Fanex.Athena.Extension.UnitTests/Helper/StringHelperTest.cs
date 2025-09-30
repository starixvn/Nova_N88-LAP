using Fanex.Athena.Extension.Helper;
using NUnit.Framework;

namespace Fanex.Athena.Extension.UnitTests.Helper
{
    [TestFixture]
    public class StringHelperTest
    {
        [Test]
        public void IsAnyNullOrEmpty_AllValidStrings_ReturnsFalse()
        {
            // Arrange
            var values = new[] { "string1", "string2", "string3" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void IsAnyNullOrEmpty_OneNullString_ReturnsTrue()
        {
            // Arrange
            var values = new[] { "string1", null, "string3" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_OneEmptyString_ReturnsTrue()
        {
            // Arrange
            var values = new[] { "string1", "", "string3" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_FirstStringNull_ReturnsTrue()
        {
            // Arrange
            var values = new[] { null, "string2", "string3" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_LastStringEmpty_ReturnsTrue()
        {
            // Arrange
            var values = new[] { "string1", "string2", "" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_AllNullStrings_ReturnsTrue()
        {
            // Arrange
            var values = new string[] { null, null, null };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_AllEmptyStrings_ReturnsTrue()
        {
            // Arrange
            var values = new[] { "", "", "" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_EmptyArray_ReturnsFalse()
        {
            // Arrange
            var values = new string[] { };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void IsAnyNullOrEmpty_SingleValidString_ReturnsFalse()
        {
            // Arrange
            var values = new[] { "valid string" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void IsAnyNullOrEmpty_SingleNullString_ReturnsTrue()
        {
            // Arrange
            var values = new string[] { null };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_SingleEmptyString_ReturnsTrue()
        {
            // Arrange
            var values = new[] { "" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAnyNullOrEmpty_WhitespaceString_ReturnsFalse()
        {
            // Arrange
            var values = new[] { "string1", "   ", "string3" };

            // Act
            var result = StringHelper.IsAnyNullOrEmpty(values);

            // Assert
            Assert.That(result, Is.False);
        }
    }
}
