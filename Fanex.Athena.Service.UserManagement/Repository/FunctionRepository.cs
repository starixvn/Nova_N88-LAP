namespace Fanex.Athena.Service.UserManagement.Repository
{
    using System.Collections.Generic;
    using System.Linq;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Data;
    using Fanex.Data.Repository;

    public class FunctionRepository : IFunctionRepository
    {
        public IEnumerable<AccFunction> GetBySiteInHierarchy(ICriteria criteria)
        {
            var data = FetchData<FunctionData>(criteria);
            return data.Select(i => new AccFunction
            {
                Id = i.FunctionId,
                Name = i.FunctionName,
                Key = i.FunctionKey,
                Description = i.Description,
                Crud = i.CRUD,
                DisplayOrder = i.DisplayOrder,
                IsActive = i.IsActive,
                Site = new Site
                {
                    Id = i.SiteId,
                    Name = i.SiteName
                },
                Parent = i.ParentName == null ? null : new AccFunction
                {
                    Id = i.ParentId,
                    Name = i.ParentName
                }
            });
        }

        public IEnumerable<FunctionPolicy> GetByGroupAndSite(ICriteria criteria)
        {
            var data = FetchData<FunctionData>(criteria);
            return data.Select(i => new FunctionPolicy
            {
                Function = new AccFunction
                {
                    Id = i.FunctionId,
                    Name = i.FunctionName,
                    Key = i.FunctionKey,
                    Description = i.Description,
                    Crud = i.CRUD,
                    DisplayOrder = i.DisplayOrder,
                    IsActive = i.IsActive,
                    Site = new Site
                    {
                        Id = i.SiteId,
                        Name = i.SiteName
                    },
                    Parent = i.ParentName == null ? null : new AccFunction
                    {
                        Id = i.ParentId,
                        Name = i.ParentName
                    }
                },
                Site = new Site
                {
                    Id = i.SiteId,
                    Name = i.SiteName
                },
                Policy = i.Policy,
                Creator = new User
                {
                    Id = i.CreatorId,
                    Name = i.CreatorUsername
                },
                CreatedDate = i.CreatedDate,
                Modifier = new User
                {
                    Id = i.ModifierId,
                    Name = i.ModifierUsername
                },
                ModifiedDate = i.ModifiedDate
            });
        }

        private static IEnumerable<T> FetchData<T>(ICriteria criteria)
        {
            using (var db = ObjectDbFactory.CreateInstance(criteria.GetSettingKey()))
            {
                var data = db.Query<T>(criteria);
                return data;
            }
        }
    }
}