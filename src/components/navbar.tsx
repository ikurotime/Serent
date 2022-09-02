type Props = {}
import { useAuth } from '@/context/AuthContext'
import {Avatar, Button, Dropdown, Navbar, Text} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
export default function NavbarComponent({}: Props) {
  const { user,logout } = useAuth()
  const navigate = useNavigate()
  return (
    <Navbar maxWidth="fluid"  variant="floating">
    <Navbar.Brand>
      <Text b color='inherit' hideIn='xs'>
      Serent
      </Text>
    </Navbar.Brand>
   {/*  <Navbar.Content activeColor="primary" hideIn="xs" variant="underline-rounded">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content> */}
     <Navbar.Content>

{ !user ? 
     ( <>
        <Button onClick={() => navigate('/auth/login')} auto color="inherit">
        Login
        </Button>
        <Navbar.Item>
          <Button onClick={() => navigate('/auth/register')} auto flat color="primary">
          Sign Up
          </Button>
        </Navbar.Item>
     </>
 ): (
  <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              //onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error" >
                <button class='w-full h-full text-left' onClick={logout}>Log Out</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
 )}
 </Navbar.Content>

   </Navbar>
  )
}