import fs from 'fs'

function ServerComponentTwo() {
  fs.readFileSync('src/components/server-component-two.tsx', 'utf8')
  return (
    <div>Server Component Two</div>
  )
}

export default ServerComponentTwo