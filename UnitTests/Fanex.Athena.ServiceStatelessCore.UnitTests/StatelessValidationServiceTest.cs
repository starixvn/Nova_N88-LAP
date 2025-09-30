using Fanex.Athena.Model.Core.MetaModel;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class StatelessValidationServiceTest
    {
        private IStatelessValidationService _validationService;

        [SetUp]
        public void SetUp()
        {
            _validationService = new StatelessValidationService();
        }

        [Test]
        public void IsValid_ValidModel_ReturnsTrue()
        {
            // Arrange
            var model = Substitute.For<IMetaModelValidation>();
            model.IsValid.Returns(true);

            // Act
            var result = _validationService.IsValid(model);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsValid_InvalidModel_ReturnsFalse()
        {
            // Arrange
            var model = Substitute.For<IMetaModelValidation>();
            model.IsValid.Returns(false);

            // Act
            var result = _validationService.IsValid(model);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void IsValid_NullModel_ReturnsFalse()
        {
            // Arrange
            IMetaModelValidation model = null;

            // Act
            var result = _validationService.IsValid(model);

            // Assert
            Assert.That(result, Is.False);
        }
    }
}
