namespace Fanex.Athena.Model.Core.UnitTest
{
    using Fanex.Athena.Model.Core.DataDomain;
    using NUnit.Framework;

    [TestFixture]
    public class Tests
    {
        public const int Asia = 1;
        public const int BetfromOthers = 88;

        [Test]
        public void GetPlatformName_ContainsKey_ReturnResourceName()
        {
            // Arrange
            string expectedResult = "Asia";

            // Action
            var result = PlatformType.GetPlatformName("g");

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetPlatformName_ContainsKeyByType_ReturnResourceName()
        {
            // Arrange
            string expectedResult = "Asia";

            // Action
            var result = PlatformType.GetPlatformName(Asia);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetPlatformKey_ContainsKey_ReturnResourceName()
        {
            // Arrange
            string expectedResult = "Asia";

            // Action
            var result = PlatformType.GetPlatformKey(Asia);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void IsValidPlatform_InRange_ReturnTrue()
        {
            // Action
            var result = PlatformType.IsValidPlatform(Asia);

            // Assert
            Assert.IsTrue(result);
        }

        [Test]
        public void IsValidPlatform_InRange_ReturnFalse()
        {
            // Action
            var result = PlatformType.IsValidPlatform(20);

            // Assert
            Assert.IsFalse(result);
        }

        [Test]
        public void IsValidPlatform_BetfromOthers_ReturnTrue()
        {
            // Action
            var result = PlatformType.IsValidPlatform(BetfromOthers);

            // Assert
            Assert.IsTrue(result);
        }
    }
}