import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconimg from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="LetmeAsk" />
                    <button>
                        Crie sua sala com o google
                        <img src={googleIconimg} alt="Logo do google" />
                    </button>
                    <div> ou entre em uma sala </div>
                    <form >
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}
// C: \Users\victo\OneDrive\Área de Trabalho\Javascript\React\letmeask\src\assets\images\check.svg
// C: \Users\victo\OneDrive\Área de Trabalho\Javascript\React\letmeask\src\pages\Home.tsx