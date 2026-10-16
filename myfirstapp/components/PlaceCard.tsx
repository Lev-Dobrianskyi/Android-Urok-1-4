import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import type { Place } from "../types/place";

type PlaceCardProps = {
  place: Place;
  favorite: boolean;
  TriggerFavorite: (id: string) => void;
};

export default function PlaceCard({
  place,
  favorite,
  TriggerFavorite,
}: PlaceCardProps) {
  return (
    <View style={styles.card}>
      {/* Зображення */}
      <Image source={{ uri: place.image }} style={styles.image} resizeMode="cover" />

      {/* Вміст картки */}
      <View style={styles.content}>
        {/* Шапка: Назва та Категорія */}
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>
            {place.name}
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{place.category}</Text>
          </View>
        </View>

        {/* Опис */}
        <Text style={styles.description} numberOfLines={2}>
          {place.description}
        </Text>

        {/* Підвал картки: Рейтинг та Кнопка обраного */}
        <View style={styles.footer}>
          <Text style={styles.rating}>★ {place.rating}</Text>

          <Pressable
            style={[styles.favoriteButton, favorite && styles.favoriteActive]}
            onPress={() => TriggerFavorite(place.id)}
          >
            <Text style={[styles.favoriteText, favorite && styles.favoriteActiveText]}>
              {favorite ? "♥ Улюблене" : "♡ Додати"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 16,
    // Тіні для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Тінь для Android
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1c1c1e",
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#4f46e5",
    fontSize: 12,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#f59e0b",
  },
  favoriteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
  },
  favoriteActive: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },
  favoriteText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  favoriteActiveText: {
    color: "#ef4444",
  },
});
 