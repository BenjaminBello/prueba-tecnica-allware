package vehiculos.config;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter("/*") // Aplica a todas las rutas
public class CORSFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Permitir solicitudes desde cualquier origen
        httpResponse.setHeader("Access-Control-Allow-Origin", "*"); // Cambia * por el dominio específico si es necesario
        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, SOAPAction");
        httpResponse.setHeader("Access-Control-Max-Age", "86400");

        // Manejo de la solicitud OPTIONS (preflight)
        if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) request).getMethod())) {
            httpResponse.setStatus(HttpServletResponse.SC_OK); // Responde 200 para OPTIONS
            return;
        }

        // Continuar con la siguiente fase del filtro
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Inicialización si es necesario
    }

    @Override
    public void destroy() {
        // Destrucción si es necesario
    }
}
