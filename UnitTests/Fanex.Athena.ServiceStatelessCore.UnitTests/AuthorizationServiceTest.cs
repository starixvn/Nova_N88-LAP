using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.DataAccess.Core.Users.Interfaces;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Auth;
using Fanex.Athena.Model.Auth.DataDomain;
using Fanex.Athena.Model.Auth.Enum;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.N88.Core.Configuration;
using Fanex.N88.Core.Service.Interface;
using Fanex.NVC.Authentication.Infrastructure;
using NSubstitute;

using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class AuthorizationServiceTest
    {
        private IAuthorizationService _authorizationService;

        private IAthorizationDataAccess _authorizationDataAccess;

        private ICustomMemoryCacheService _cache;

        private IUserService _userService;

        private N88Settings _n88Settings;

        [SetUp]
        public void SetUp()
        {
            _authorizationDataAccess = Substitute.For<IAthorizationDataAccess>();
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _userService = Substitute.For<IUserService>();
            _n88Settings = new N88Settings();
            _authorizationService = new AuthorizationService(_authorizationDataAccess, _cache, _userService, _n88Settings);
        }

        [TearDown]
        public void TearDown()
        {
            _authorizationDataAccess = null;
        }

        [Test]
        public void IsAllowedSpecialBA_FunctionListContainCorrectKey_ReturnTrue()
        {
            // Arrange
            var functionList = new List<NVCFunctionAuthInfo> {
                new NVCFunctionAuthInfo {
                    FunctionKey = PermissionKeys.CustomerInfoSpecialBA
                }
            };
            var userSession = new NVCUserAuthInfo { FunctionList = functionList };

            // Action
            var result = _authorizationService.IsAllowedSpecialBA(userSession);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void IsAllowedSpecialBA_FunctionIdListNotContainCorrectKey_ReturnFalse()
        {
            // Arrange
            var functionList = new List<NVCFunctionAuthInfo> {
                new NVCFunctionAuthInfo {
                    FunctionKey = PermissionKeys.CustomerInfoCommissionGroupList
                }
            };
            var userSession = new NVCUserAuthInfo { FunctionList = functionList };

            // Action
            var result = _authorizationService.IsAllowedSpecialBA(userSession);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void HasPermissionOnData_CustIdAndTransIdIsZero_ReturnTrue()
        {
            //Arrange
            var currencyAgent = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 200 } }
            };

            //Action

            var result = _authorizationService.HasPermissionOnData(currencyAgent, 0, 0);

            //Assert

            Assert.That(result, Is.True);
        }

        [Test]
        public void HasPermissionOnData_CustBelongToUser_ReturnTrue()
        {
            //Arrange
            var currencyAgent = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 200 } }
            };

            _authorizationDataAccess.IsCustomerBelonging(Arg.Any<int>(), Arg.Any<long>()).Returns(new Tuple<int, int>(1, 100));

            //Action

            var result = _authorizationService.HasPermissionOnData(currencyAgent, 0, 0);

            //Assert

            Assert.That(result, Is.True);
        }

        [Test]
        public void HasPermissionOnData_CustNotBelongToUser_ReturnFalse()
        {
            //Arrange
            const int custId = 1;
            var currencyAgent = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 200 } }
            };
            _authorizationDataAccess.IsCustomerBelonging(custId, Arg.Any<long>()).Returns(new Tuple<int, int>(1, 1));

            //Action

            var result = _authorizationService.HasPermissionOnData(currencyAgent, custId, 0);

            //Assert

            Assert.That(result, Is.False);
        }

        [TestCase(new string[] { "alex", "alex2" }, "any,any2", false)]
        [TestCase(new string[] { "alex", "any2" }, "alex,any2", true)]
        [TestCase(new string[] { "alex" }, "alex", true)]
        public void HasPermissions_WhenCallWithFunctionKey_ReturnCorrectResult(string[] permissionKey, string userPermissionKey, bool expectedResult)
        {
            //Arrange
            var userID = 1;
            var userFunctionList = CreateUserPermission(userPermissionKey);
            if (permissionKey.Length == 1)
            {
                _userService.GetPermission(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns((byte)Policy.Read);
            }
            else
            {
                _userService.GetPermissions(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>(), Arg.Any<string>()).Returns(userFunctionList);
            }

            //Action
            var result = _authorizationService.HasPermissions(userID, permissionKey);

            //Assert

            Assert.AreEqual(expectedResult, result);
        }

        private List<N88.Core.Models.ValueObject.FunctionPolicy> CreateUserPermission(string userPermissionKey)
        {
            return userPermissionKey.Split(',')
              .Select(x => new N88.Core.Models.ValueObject.FunctionPolicy() { Function = new N88.Core.Models.Function() { Key = x }, Policy = (byte)Policy.Read }).ToList();
        }
    }
}