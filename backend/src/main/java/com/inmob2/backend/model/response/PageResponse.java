package com.inmob2.backend.model.response;

import org.springframework.data.domain.Page;

import java.util.List;

public class PageResponse<T> {

    private List<T> data;
    private int paginaActual;
    private int tamanioPagina;
    private int totalPaginas;
    private long totalElementos;
    private boolean hayPaginaSiguiente;
    private boolean hayPaginaAnterior;

    public static <T> PageResponse<T> fromPage(Page<T> page) {
        PageResponse<T> r = new PageResponse<>();
        r.data = page.getContent();
        r.paginaActual = page.getNumber();
        r.tamanioPagina = page.getSize();
        r.totalPaginas = page.getTotalPages();
        r.totalElementos = page.getTotalElements();
        r.hayPaginaSiguiente = page.hasNext();
        r.hayPaginaAnterior = page.hasPrevious();
        return r;
    }

    public List<T> getData() { return data; }
    public int getPaginaActual() { return paginaActual; }
    public int getTamanioPagina() { return tamanioPagina; }
    public int getTotalPaginas() { return totalPaginas; }
    public long getTotalElementos() { return totalElementos; }
    public boolean isHayPaginaSiguiente() { return hayPaginaSiguiente; }
    public boolean isHayPaginaAnterior() { return hayPaginaAnterior; }
}
