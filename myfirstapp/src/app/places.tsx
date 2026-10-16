import { useState, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import type { PlaceCatalog } from "../../types/place";
import PlaceCard from '../../components/PlaceCard';
import { places } from '../../data/places';
 
type PlaceFilter = 'Усі' | PlaceCatalog;
const category: PlaceFilter[] = ['Усі', 'Nature', 'Entertainment', 'History'];
 
export default function PlacesScreen() {
    const [search, setSearch] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<PlaceFilter>('Усі');
    const [favorites, setFavorites] = useState<string[]>([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
    const filteredPlaces = useMemo(() => {
        return places.filter((place) => {
            const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase().trim());
            const matchesCategory = selectedCategory === 'Усі' || place.category === selectedCategory;
            const matchesFavorites = !showFavoritesOnly || favorites.includes(place.id);
            return (matchesCategory && matchesSearch && matchesFavorites
            );
        });
    }, [search, selectedCategory, showFavoritesOnly, favorites]);
 
    function triggerFavorite(id: string) {
        setFavorites((obj) => {
            if (obj.includes(id)) {
                return obj.filter((favId) => favId !== id);
            }
            return [...obj, id];
        })
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Places for Travel</Text>
            <Text style={styles.subtitle}>Find interesting locations in Ukraine</Text>
 
            <TextInput
                style={styles.searchInput}
                value={search}
                onChangeText={setSearch}
                placeholder="Search by name..."
                placeholderTextColor="#6b7280"
                accessibilityLabel="Search places"
                returnKeyType="search"
            />
 
            <View style={styles.filters}>
                {category.map((item) => {
                    const isSelected = selectedCategory === item;
                    return (
                        <Pressable
                            key={item}
                            style={[styles.categoryButton, isSelected && styles.categoryButtonSelected]}
                            onPress={() => setSelectedCategory(item)}
                            accessibilityRole="button"
                            accessibilityState={{ selected: isSelected }}
                        >
                            <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                                {item}
                            </Text>
                        </Pressable>
                    );
                })}
                <Pressable
                    style={[styles.categoryButton, showFavoritesOnly && styles.favoriteFilterSelected]}
                    onPress={() => setShowFavoritesOnly((visible) => !visible)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: showFavoritesOnly }}
                >
                    <Text style={[styles.categoryText, showFavoritesOnly && styles.favoriteFilterTextSelected]}>
                        Favorites
                    </Text>
                </Pressable>
            </View>
 
            <Text style={styles.resultCount}>
                Places found: {filteredPlaces.length}
            </Text>
 
            <FlatList
                data={filteredPlaces}
                keyExtractor={(place) => place.id}
                renderItem={({ item }) => (
                    <PlaceCard
                        place={item}
                        favorite={favorites.includes(item.id)}
                        TriggerFavorite={triggerFavorite}
                    />
                )}
                contentContainerStyle={styles.listContent}
                keyboardShouldPersistTaps="handled"
                ListEmptyComponent={
                    <Text style={styles.emptyText}>
                        {showFavoritesOnly && favorites.length === 0
                            ? 'You have no favorite places yet.'
                            : 'No places found for your query.'}
                    </Text>
                }
            />
        </View>
    );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        paddingTop: 24,
    },
    title: {
        marginHorizontal: 16,
        fontSize: 26,
        fontWeight: '700',
        color: '#111827',
    },
    subtitle: {
        marginTop: 4,
        marginHorizontal: 16,
        marginBottom: 16,
        fontSize: 15,
        color: '#6b7280',
    },
    searchInput: {
        marginHorizontal: 16,
        marginBottom: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        color: '#111827',
        fontSize: 16,
    },
    filters: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginHorizontal: 16,
        marginBottom: 12,
    },
    categoryButton: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#e5e7eb',
    },
    categoryButtonSelected: {
        backgroundColor: '#4f46e5',
    },
    favoriteFilterSelected: {
        backgroundColor: '#fee2e2',
    },
    categoryText: {
        color: '#374151',
        fontSize: 14,
        fontWeight: '600',
    },
    categoryTextSelected: {
        color: '#ffffff',
    },
    favoriteFilterTextSelected: {
        color: '#b91c1c',
    },
    resultCount: {
        marginHorizontal: 16,
        marginBottom: 4,
        color: '#6b7280',
        fontSize: 13,
    },
    listContent: {
        flexGrow: 1,
        paddingBottom: 16,
    },
    emptyText: {
        marginTop: 32,
        marginHorizontal: 24,
        color: '#6b7280',
        fontSize: 16,
        textAlign: 'center',
    },
});
 