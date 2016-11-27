using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Projectatis.Startup))]
namespace Projectatis
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
