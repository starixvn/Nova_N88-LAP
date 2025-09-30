using System;
using System.Linq;
using Fanex.Athena.Extension.Utility;
using NUnit.Framework;

namespace Fanex.Athena.Extension.UnitTests.Utility
{
    [TestFixture]
    public class UtilTest
    {
        [Test]
        public void SupportedLanguages_ReturnsExpectedLanguages()
        {
            // Act
            var supportedLanguages = Util.SupportedLanguages;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(supportedLanguages, Is.Not.Null);
                Assert.That(supportedLanguages.ContainsKey("en-US"), Is.True);
                Assert.That(supportedLanguages["en-US"], Is.EqualTo("English"));
            });
        }

        [Test]
        public void MapLanguages_ReturnsExpectedMappings()
        {
            // Act
            var mapLanguages = Util.MapLanguages;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(mapLanguages, Is.Not.Null);
                Assert.That(mapLanguages.ContainsKey("en-US"), Is.True);
                Assert.That(mapLanguages["en-US"], Is.EqualTo("en"));
            });
        }

        [Test]
        public void MapIetfLanguageCodes_ReturnsExpectedMappings()
        {
            // Act
            var mapIetfLanguageCodes = Util.MapIetfLanguageCodes;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(mapIetfLanguageCodes, Is.Not.Null);
                Assert.That(mapIetfLanguageCodes.ContainsKey("en"), Is.True);
                Assert.That(mapIetfLanguageCodes["en"], Is.EqualTo("en-US"));
            });
        }

        [Test]
        public void MapIetfLanguageCodes_CaseInsensitive()
        {
            // Act
            var mapIetfLanguageCodes = Util.MapIetfLanguageCodes;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(mapIetfLanguageCodes.ContainsKey("EN"), Is.True);
                Assert.That(mapIetfLanguageCodes.ContainsKey("En"), Is.True);
                Assert.That(mapIetfLanguageCodes["EN"], Is.EqualTo("en-US"));
                Assert.That(mapIetfLanguageCodes["En"], Is.EqualTo("en-US"));
            });
        }

        [Test]
        public void IsValidLanguage_SupportedLanguage_ReturnsTrue()
        {
            // Arrange
            const string languageCode = "en-US";

            // Act
            var result = Util.IsValidLanguage(languageCode);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsValidLanguage_UnsupportedLanguage_ReturnsFalse()
        {
            // Arrange
            const string languageCode = "fr-FR";

            // Act
            var result = Util.IsValidLanguage(languageCode);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void IsValidLanguage_NullLanguage_ThrowsArgumentNullException()
        {
            // Arrange
            string languageCode = null;

            // Act & Assert
            Assert.Throws<ArgumentNullException>(() => Util.IsValidLanguage(languageCode));
        }

        [Test]
        public void IsValidLanguage_EmptyLanguage_ReturnsFalse()
        {
            // Arrange
            const string languageCode = "";

            // Act
            var result = Util.IsValidLanguage(languageCode);

            // Assert
            Assert.That(result, Is.False);
        }

        [TestCase("abcd123", true, Description = "Valid password with 4 letters and 3 numbers")]
        [TestCase("abc12d", true, Description = "Valid password with letters and numbers mixed")]
        [TestCase("password123", true, Description = "Valid password with multiple letters and numbers")]
        [TestCase("ab1234", true, Description = "Valid password with minimum letters and multiple numbers")]
        [TestCase("abcdef12", true, Description = "Valid password with multiple letters and minimum numbers")]
        [TestCase("password1", false, Description = "Invalid password with only one number")]
        [TestCase("a1b2", false, Description = "Invalid password too short")]
        [TestCase("abcdef", false, Description = "Invalid password with no numbers")]
        [TestCase("123456", false, Description = "Invalid password with no letters")]
        [TestCase("a123456", false, Description = "Invalid password with only one letter")]
        [TestCase("", false, Description = "Empty password")]
        public void IsPasswordValid_VariousPasswords_ReturnsExpectedResult(string password, bool expected)
        {
            // Act
            var result = Util.IsPasswordValid(password);

            // Assert
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void IsPasswordValid_NullPassword_ThrowsArgumentNullException()
        {
            // Arrange
            string password = null;

            // Act & Assert
            Assert.Throws<ArgumentNullException>(() => Util.IsPasswordValid(password));
        }

        [Test]
        public void IsPasswordValid_PasswordWithSpecialCharacters_ReturnsCorrectResult()
        {
            // Arrange
            const string validPasswordWithSpecialChars = "abc!@#123";
            const string invalidPasswordWithSpecialChars = "!@#$%^&*";

            // Act
            var validResult = Util.IsPasswordValid(validPasswordWithSpecialChars);
            var invalidResult = Util.IsPasswordValid(invalidPasswordWithSpecialChars);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(validResult, Is.True);
                Assert.That(invalidResult, Is.False);
            });
        }

        [Test]
        public void IsPasswordValid_PasswordWithUpperAndLowerCase_ReturnsTrue()
        {
            // Arrange
            const string password = "AbCdEf123";

            // Act
            var result = Util.IsPasswordValid(password);

            // Assert
            Assert.That(result, Is.True);
        }
    }
}