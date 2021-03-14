export class LocalStorageUtils {
    
    public obterUsuario(): string{
        return JSON.parse(localStorage.getItem('bebs.user'));
    }

    public salvarDadosLocaisUsuario(response: any) {
        this.salvarTokenUsuario(response.accessToken);
        this.salvarUsuario(response.userToken);
    }

    public limparDadosLocaisUsuario() {
        localStorage.removeItem('bebs.token');
        localStorage.removeItem('bebs.user');
    }

    public obterTokenUsuario(): string {
        return localStorage.getItem('bebs.token');
    }

    public salvarTokenUsuario(token: string) {
        localStorage.setItem('bebs.token', token);
    }

    public salvarUsuario(user: string) {
        localStorage.setItem('bebs.user', JSON.stringify(user));
    }
    
}