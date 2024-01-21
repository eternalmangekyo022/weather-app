export {};

declare global {
	interface GeoLocation {
		latitude: number
		lookupSource: string
		longitude: number
		localityLanguageRequested: string
		continent: string
		continentCode: string
		countryName: string
		countryCode: string
		principalSubdivision: string
		principalSubdivisionCode: string
		city: string
		locality: string
		postcode: string
		plusCode: string
		localityInfo: {
			administrative: Array<{
				name: string
				description: string
				isoName?: string
				order: number
				adminLevel: number
				isoCode?: string
				wikidataId: string
				geonameId?: number
			}>
			informative: Array<{
				name: string
				description?: string
				isoName?: string
				order: number
				isoCode?: string
				wikidataId?: string
				geonameId?: number
			}>
		}
	}
}