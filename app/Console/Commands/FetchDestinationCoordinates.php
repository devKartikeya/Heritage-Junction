<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Destination;
use Illuminate\Support\Facades\Http;

class FetchDestinationCoordinates extends Command
{
    protected $signature = 'destinations:fetch-coordinates';
    protected $description = 'Fetch lat/lng for all destinations using Nominatim and save to DB';

    public function handle()
    {
        $destinations = Destination::all();

        foreach ($destinations as $dest) {
            $this->info("Fetching coordinates for: {$dest->name}");

            $response = Http::withoutVerifying()->get('https://nominatim.openstreetmap.org/search', [
                'format' => 'json',
                'q' => $dest->name,
            ]);

            if ($response->successful() && count($response->json()) > 0) {
                $data = $response->json()[0];
                $dest->lat = $data['lat'];
                $dest->lng = $data['lon'];
                $dest->save();

                $this->info("Saved: {$dest->name} → {$dest->lat}, {$dest->lng}");
            } else {
                $this->error("Could not fetch coordinates for: {$dest->name}");
            }

            // Respect Nominatim usage policy (1 request/sec)
            sleep(1);
        }

        $this->info('All coordinates fetched and saved!');
    }
}
