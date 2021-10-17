exports.seed = function (knex) {
	return knex('directus_relations').insert([
		{
			many_collection: 'artists',
			many_field: 'id',
			one_collection: 'guests',
			one_field: 'favorite_artists',
		},
		{
			many_collection: 'artists',
			many_field: 'id',
			one_collection: 'artists_events',
			one_field: 'artist_id',
		},
		{
			many_collection: 'events',
			many_field: 'id',
			one_collection: 'artists_events',
			one_field: 'events_id',
		},
		{
			many_collection: 'guests',
			many_field: 'id',
			one_collection: 'guests_events',
			one_field: 'guests_id',
		},
		{
			many_collection: 'events',
			many_field: 'id',
			one_collection: 'guests_events',
			one_field: 'events_id',
		},
	]);
};