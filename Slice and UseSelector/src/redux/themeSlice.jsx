import { useSelector } from "react-redux";

function Dashboard() {
  const userName = useSelector((state) => state.user.name);
  const isLogin = useSelector((state) => state.user.isLogin);
  const themeMode = useSelector((state) => state.theme.mode);
  const language = useSelector((state) => state.language.language);

  return (
    <div>
      <h2>Kullanıcı: {userName}</h2>
      <p>Giriş Durumu: {isLogin ? "Giriş Yapıldı" : "Giriş Yok"}</p>
      <p>Tema: {themeMode}</p>
      <p>Dil: {language}</p>
    </div>
  );
}

export default Dashboard;
