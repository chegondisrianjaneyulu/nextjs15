import fs from 'fs'
// import ClientComponentOne from './client-component-one'
import ServerComponentTwo from './server-component-two'

function ServerComponentOne() {
  fs.readFileSync('src/components/server-component-one.tsx', 'utf8')
  return (
    <div>
        <h1>Server Component One</h1>
        <ServerComponentTwo/>
        {/* <ClientComponentOne/> */}
    </div>
  )
}

export default ServerComponentOne