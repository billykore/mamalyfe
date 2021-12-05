import Form from '../components/Form'
import Button from '../components/Button'
import Typography from '../components/Typography'

const LoginPage = () => {
  return (
    <div>
      <Typography className="mx-20 my-10">Login</Typography>
      <div className="max-w-sm mx-auto mt-32">
        <Form type="text" label="Username" />
        <Form className="mt-4" type="text" label="Password" />
        <Button className="mt-10 mx-auto">Log Me In</Button>
      </div>
    </div>
   
  )
}

export default LoginPage