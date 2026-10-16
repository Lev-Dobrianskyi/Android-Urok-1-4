import type { Place } from "../types/place";
 
export const places: Place[] = [
    {
        id: "1",
        name: "Карпатські Водоспади",
        description: "Живописний куточок дикої природи серед гірських хребтів та вікових лісів.",
        rating: 4.8,
        category: "Nature",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        name: "Тестова локація Q",
        description: "Опис для тестового об'єкта у категорії 'q'.",
        rating: 4.2,
        category: "History",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "3",
        name: "Альтернативна точка QW",
        description: "Спеціальна локація для категорії 'qw' з чудовими краєвидами.",
        rating: 4.6,
        category: "Entertainment",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "4",
        name: "Озеро Синевир",
        description: "Найбільше гірське озеро України, оточене густими хвойними лісами.",
        rating: 4.9,
        category: "Nature",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    }
];