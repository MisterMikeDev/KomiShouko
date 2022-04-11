import { Loading } from "../Router/PathManager"

export const Invite = () => {
  return (
    <div>
      <title>Komi Shouko | Invite</title>
      <Loading />
      {window.location.replace("https://discord.com/api/oauth2/authorize?client_id=875166925884370994&permissions=8&scope=applications.commands%20bot")}
    </div>
  )
}