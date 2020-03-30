using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
using Fanex.Data;
using Fanex.Data.Repository;

namespace Fanex.Athena.Service.UserManagement.Repository
{
    public class UserRepository : IUserRepository
    {
        public IEnumerable<SelectListItem> GetSettingGroups(ICriteria criteria)
        {
            var data = FetchData<GroupData>(criteria);
            return data.Select(g => new SelectListItem
            {
                Text = g.GroupName,
                Value = g.GroupId.ToString(),
                Selected = g.GroupId == 0
            }).ToList();
        }

        public IEnumerable<UserLevel> GetUsers(ICriteria criteria)
        {
            var data = FetchData<UserData>(criteria);

            return data.Select(i => new UserLevel
            {
                Level = i.Level,
                Status = i.Status,
                User = new User
                {
                    Id = i.UserId,
                    FirstName = i.FirstName,
                    LastName = i.LastName,
                    Username = i.Username,
                    Email = i.Email,
                    Password = i.UserPwd,
                    LastLoginDate = i.LastLoginDate,
                    CreatedDate = i.CreatedDate,
                    ModifiedDate = i.ModifiedDate,
                    Group = new Group
                    {
                        Id = i.GroupId,
                        Name = i.GroupName
                    },
                    Creator = new User
                    {
                        Id = i.CreatorId,
                        Username = i.CreatorUsername
                    },
                    Modifier = new User
                    {
                        Id = i.ModifierId,
                        Username = i.ModifierUsername
                    }
                },
                CreatedDate = i.CreatedDateUserSite,
                ModifiedDate = i.ModifiedDateUserSite,
                Creator = new User
                {
                    Id = i.CreatorIdUserSite,
                    Username = i.CreatorUsernameUserSite
                },
                Modifier = new User
                {
                    Id = i.ModifierIdUserSite,
                    Username = i.ModifierUsernameUserSite
                },
                IsActive = i.IsActive,
                LastLoginDate = i.LastLoginDateUserSite,
                Site = new Site
                {
                    Id = i.SiteId,
                    Name = i.SiteName
                }
            }).OrderByDescending(user => user.CreatedDate);
        }

        public IEnumerable<T> FetchData<T>(ICriteria criteria)
        {
            using (var db = ObjectDbFactory.CreateInstance(criteria.GetSettingKey()))
            {
                var data = db.Query<T>(criteria);
                return data;
            }
        }

        public CommandResult ExecuteNonQueryAsync(INonQueryCommand command)
        {
            using (var db = ObjectDbFactory.CreateInstance(command.GetSettingKey()))
            {
                db.ExecuteNonQuery(command);
                CommandResult commandResult = GetCommandResult(db.GetOutputParams());

                return commandResult;
            }
        }

        public User GetUserById(ICriteria criteria)
        {
            var data = FetchData<UserData>(criteria).FirstOrDefault();

            return new User
            {
                Id = data.UserId,
                FirstName = data.FirstName,
                LastName = data.LastName,
                Username = data.Username,
                Email = data.Email,
                Password = data.UserPwd,
                LastLoginDate = data.LastLoginDate,
                CreatedDate = data.CreatedDate,
                ModifiedDate = data.ModifiedDate,
                Group = new Group
                {
                    Id = data.GroupId,
                    Name = data.GroupName
                },
                Creator = new User
                {
                    Id = data.CreatorId,
                    Username = data.CreatorUsername
                },
                Modifier = new User
                {
                    Id = data.ModifierId,
                    Username = data.ModifierUsername
                }
            };
        }

        private CommandResult GetCommandResult(Hashtable hash)
        {
            var errCode = hash["Error"];
            var errMsg = hash["Message"];

            return new CommandResult
            {
                Error = (errCode is DBNull) ? 0 : Convert.ToInt32(errCode),
                Message = (errMsg is DBNull) ? string.Empty : Convert.ToString(errMsg)
            };
        }
    }
}