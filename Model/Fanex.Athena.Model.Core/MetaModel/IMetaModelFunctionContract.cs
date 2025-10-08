namespace Fanex.Athena.Model.Core.MetaModel
{
    public interface IMetaModelFunctionContract
    {
        bool IsAllowedBA { get; set; }

        bool HasComm { get; set; }

        string FunctionKey { get; }
    }
}