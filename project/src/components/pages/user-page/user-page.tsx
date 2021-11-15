import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import PageHeader from '../../containers/page-header/page-header';
import SignInForm from '../../sign-in-form/sign-in-form';

function LoginPage(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader title={'Sign in'} userPageHead>
        <Logo />
      </PageHeader>
      <SignInForm />
      <PageFooter />
    </div>
  );
}

export default LoginPage;
