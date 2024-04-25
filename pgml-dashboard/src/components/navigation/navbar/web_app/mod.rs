use crate::components::{StaticNav, StaticNavLink};
use crate::utils::config;
use pgml_components::component;
use sailfish::TemplateOnce;

#[derive(TemplateOnce, Default)]
#[template(path = "navigation/navbar/web_app/template.html")]
pub struct WebApp {
    pub standalone_dashboard: bool,
    pub links: Vec<StaticNavLink>,
    pub account_management_nav: StaticNav,
    pub deployment_controls: StaticNav,
}

impl WebApp {
    pub fn new(links: Vec<StaticNavLink>, deployment_controls: StaticNav) -> WebApp {
        WebApp {
            standalone_dashboard: config::standalone_dashboard(),
            links,
            account_management_nav: StaticNav::default(),
            deployment_controls,
        }
    }
}

component!(WebApp);
