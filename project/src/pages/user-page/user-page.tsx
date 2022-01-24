import PageFooter from '../../components/ui/page-footer/page-footer';
import PageHeader from '../../components/ui/page-header/page-header';
import SignInForm from '../../components/sign-in-form/sign-in-form';

function LoginPage(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader title={'Sign in'} userPageHead />
      <SignInForm />
      <PageFooter />
    </div>
  );
}

export default LoginPage;
