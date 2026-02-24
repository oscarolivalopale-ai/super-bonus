const { createApp } = Vue;

createApp({
    data() {
        return {
            habilidades: [
                {
                    id: 1,
                    nombre: "Vuelo",
                    icono: "🦸"
                },
                {
                    id: 2,
                    nombre: "Fuerza",
                    icono: "💪"
                },
                {
                    id: 3,
                    nombre: "Teletransportación",
                    icono: "⚡"
                }
            ]
        }
    },
    methods: {
        activarPoder(nombre) {
            alert("¡Poder de " + nombre + " activado!");
        }
    }
}).mount("#app-heroes");