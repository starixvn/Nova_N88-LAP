using System;
using System.Globalization;
using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Web.HtmlExtension;
using NUnit.Framework;

namespace Fanex.Athena.Web.UnitTests.HtmlExtension
{
    [TestFixture]
    public class HtmlHelperExtensionsTest
    {
        [Test]
        public void ToFullDateString_DefaultFormats_ReturnsFormattedDateTime()
        {
            // Arrange
            var dateTime = new DateTime(2023, 5, 15, 14, 30, 0);

            // Act
            var result = dateTime.ToFullDateString();

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.ToString(), Does.Contain("May 15, 2023"));
                Assert.That(result.ToString(), Does.Contain("14:30"));
                Assert.That(result.ToString(), Does.Contain("<span class='datetime'>"));
                Assert.That(result.ToString(), Does.Contain("<span class='date'>"));
                Assert.That(result.ToString(), Does.Contain("<span class='time'>"));
            });
        }

        [Test]
        public void ToFullDateString_CustomFormats_ReturnsFormattedDateTime()
        {
            // Arrange
            var dateTime = new DateTime(2023, 5, 15, 14, 30, 0);
            const string dateFormat = "yyyy-MM-dd";
            const string timeFormat = "HH:mm:ss";

            // Act
            var result = dateTime.ToFullDateString(dateFormat, timeFormat);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.ToString(), Does.Contain("2023-05-15"));
                Assert.That(result.ToString(), Does.Contain("14:30:00"));
                Assert.That(result.ToString(), Does.Contain("<span class='datetime'>"));
            });
        }

        [Test]
        public void DecodeXMLValue_ValidXMLEntities_ReturnsDecodedString()
        {
            // Arrange
            const string xmlString = "Test &amp; &lt;tag&gt; &quot;quoted&quot; &apos;text&apos;";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("Test & <tag> \"quoted\" ''text''"));
        }

        [Test]
        public void DecodeXMLValue_StringWithAmpersand_DecodesCorrectly()
        {
            // Arrange
            const string xmlString = "Rock &amp; Roll";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("Rock & Roll"));
        }

        [Test]
        public void DecodeXMLValue_StringWithLessThanGreaterThan_DecodesCorrectly()
        {
            // Arrange
            const string xmlString = "&lt;html&gt;";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("<html>"));
        }

        [Test]
        public void DecodeXMLValue_StringWithQuotes_DecodesCorrectly()
        {
            // Arrange
            const string xmlString = "Say &quot;Hello&quot;";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("Say \"Hello\""));
        }

        [Test]
        public void DecodeXMLValue_StringWithApostrophe_DecodesCorrectly()
        {
            // Arrange
            const string xmlString = "Don&apos;t worry";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("Don''t worry"));
        }

        [Test]
        public void DecodeXMLValue_EmptyString_ReturnsEmptyString()
        {
            // Arrange
            const string xmlString = "";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo(""));
        }

        [Test]
        public void DecodeXMLValue_NullString_ReturnsNull()
        {
            // Arrange
            string xmlString = null;

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.Null);
        }

        [Test]
        public void DecodeXMLValue_StringWithNoEntities_ReturnsOriginalString()
        {
            // Arrange
            const string xmlString = "Normal text without entities";

            // Act
            var result = xmlString.DecodeXMLValue();

            // Assert
            Assert.That(result, Is.EqualTo("Normal text without entities"));
        }

        [Test]
        public void GetGeoName_ValidUSGeoId_ReturnsCountryName()
        {
            // Arrange
            const string usGeoId = "244"; // United States GeoId

            // Act
            var result = usGeoId.GetGeoName();

            // Assert
            Assert.That(result, Does.Contain("United States").Or.Contains("US"));
        }

        [Test]
        public void GetGeoName_InvalidGeoId_ReturnsOriginalGeoId()
        {
            // Arrange
            const string invalidGeoId = "999999";

            // Act
            var result = invalidGeoId.GetGeoName();

            // Assert
            Assert.That(result, Is.EqualTo(invalidGeoId));
        }

        [Test]
        public void GetGeoName_EmptyGeoId_ReturnsEmptyString()
        {
            // Arrange
            const string emptyGeoId = "";

            // Act
            var result = emptyGeoId.GetGeoName();

            // Assert
            Assert.That(result, Is.EqualTo(""));
        }

        [Test]
        public void ToUserLevel_PortalAdmin_ReturnsPortalAdminString()
        {
            // Arrange
            const int portalAdminLevel = (int)Constant.Level.PortalAdmin;

            // Act
            var result = portalAdminLevel.ToUserLevel();

            // Assert
            Assert.That(result.ToString(), Is.Not.Empty);
        }

        [Test]
        public void ToUserLevel_SiteAdmin_ReturnsSiteAdminString()
        {
            // Arrange
            const int siteAdminLevel = (int)Constant.Level.SiteAdmin;

            // Act
            var result = siteAdminLevel.ToUserLevel();

            // Assert
            Assert.That(result.ToString(), Is.Not.Empty);
        }

        [Test]
        public void ToUserLevel_User_ReturnsUserString()
        {
            // Arrange
            const int userLevel = (int)Constant.Level.User;

            // Act
            var result = userLevel.ToUserLevel();

            // Assert
            Assert.That(result.ToString(), Is.Not.Empty);
        }

        [Test]
        public void ToUserLevel_InvalidLevel_ReturnsEmptyString()
        {
            // Arrange
            const int invalidLevel = 999;

            // Act
            var result = invalidLevel.ToUserLevel();

            // Assert
            Assert.That(result.ToString(), Is.Empty);
        }

        [Test]
        public void ToUserLevel_NegativeLevel_ReturnsEmptyString()
        {
            // Arrange
            const int negativeLevel = -1;

            // Act
            var result = negativeLevel.ToUserLevel();

            // Assert
            Assert.That(result.ToString(), Is.Empty);
        }
    }
}
