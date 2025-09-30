using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.Extension.Utility;
using NUnit.Framework;

namespace Fanex.Athena.Extension.UnitTests.Utility
{
    [TestFixture]
    public class RandomNumberTest
    {
        [Test]
        public void GenerateRandomInt32_ValidRange_ReturnsValueInRange()
        {
            // Arrange
            var minValue = 10;
            var maxValue = 20;

            // Act
            var result = RandomNumber.GenerateRandomInt32(minValue, maxValue);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.GreaterThanOrEqualTo(minValue));
                Assert.That(result, Is.LessThan(maxValue)); // Random.Next is exclusive of maxValue
            });
        }

        [Test]
        public void GenerateRandomInt32_MinEqualsMax_ReturnsMin()
        {
            // Arrange
            var minValue = 5;
            var maxValue = 5;

            // Act
            var result = RandomNumber.GenerateRandomInt32(minValue, maxValue);

            // Assert
            Assert.That(result, Is.EqualTo(minValue));
        }

        [Test]
        public void GenerateRandomInt32_MinGreaterThanMax_ThrowsException()
        {
            // Arrange
            var minValue = 20;
            var maxValue = 10;

            // Act & Assert
            Assert.Throws<ArgumentOutOfRangeException>(() => RandomNumber.GenerateRandomInt32(minValue, maxValue));
        }

        [Test]
        public void GenerateRandomInt32_NegativeRange_ReturnsValueInRange()
        {
            // Arrange
            var minValue = -20;
            var maxValue = -10;

            // Act
            var result = RandomNumber.GenerateRandomInt32(minValue, maxValue);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.GreaterThanOrEqualTo(minValue));
                Assert.That(result, Is.LessThan(maxValue));
            });
        }

        [Test]
        public void GenerateRandomInt32_CrossingZero_ReturnsValueInRange()
        {
            // Arrange
            var minValue = -10;
            var maxValue = 10;

            // Act
            var result = RandomNumber.GenerateRandomInt32(minValue, maxValue);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.GreaterThanOrEqualTo(minValue));
                Assert.That(result, Is.LessThan(maxValue));
            });
        }

        [Test]
        public void GenerateRandomInt32_MultipleCallsProduceDifferentValues()
        {
            // Arrange
            var minValue = 1;
            var maxValue = 1000;
            var results = new List<int>();
            var numberOfCalls = 50;

            // Act
            for (int i = 0; i < numberOfCalls; i++)
            {
                results.Add(RandomNumber.GenerateRandomInt32(minValue, maxValue));
            }

            // Assert
            // Check that we got some variation (not all the same value)
            var uniqueValues = results.Distinct().Count();
            Assert.That(uniqueValues, Is.GreaterThan(1), "Random number generator should produce different values");

            // Check all values are in range
            Assert.That(results.All(r => r >= minValue && r < maxValue), Is.True);
        }

        [Test]
        public void GenerateRandomInt32_SmallRange_ReturnsOnlyValidValues()
        {
            // Arrange
            var minValue = 0;
            var maxValue = 2; // Only 0 and 1 are valid
            var results = new HashSet<int>();
            var numberOfCalls = 100;

            // Act
            for (int i = 0; i < numberOfCalls; i++)
            {
                results.Add(RandomNumber.GenerateRandomInt32(minValue, maxValue));
            }

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(results.Count, Is.LessThanOrEqualTo(2));
                Assert.That(results.All(r => r == 0 || r == 1), Is.True);
            });
        }

        [Test]
        public void GenerateRandomInt32_LargeRange_DistributesWell()
        {
            // Arrange
            var minValue = 1;
            var maxValue = 101; // 1 to 100
            var results = new List<int>();
            var numberOfCalls = 1000;

            // Act
            for (int i = 0; i < numberOfCalls; i++)
            {
                results.Add(RandomNumber.GenerateRandomInt32(minValue, maxValue));
            }

            // Assert
            var uniqueValues = results.Distinct().Count();

            // We should get reasonable distribution - at least 50% of possible values
            Assert.That(uniqueValues, Is.GreaterThan(50), "Should have reasonable distribution across the range");

            // All values should be in range
            Assert.That(results.All(r => r >= minValue && r < maxValue), Is.True);
        }

        [Test]
        public void GenerateRandomInt32_IntMaxMin_HandlesCorrectly()
        {
            // Arrange
            var minValue = int.MinValue;
            var maxValue = int.MinValue + 100; // Small range to avoid long test execution

            // Act
            var result = RandomNumber.GenerateRandomInt32(minValue, maxValue);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.GreaterThanOrEqualTo(minValue));
                Assert.That(result, Is.LessThan(maxValue));
            });
        }
    }
}
