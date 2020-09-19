export default function (context) {
  if (!sessionStorage.getItem('.init-auth')) {
    context.$auth.logout();
    // .then(() => {
    //   context.$auth.logout().then(() => {
    //     context.redirect('/login');
    //   });
    //   // context.redirect('/login');
    // });

    // $nuxt.$auth.logout().then(() => context.redirect("/login");
  }
}
