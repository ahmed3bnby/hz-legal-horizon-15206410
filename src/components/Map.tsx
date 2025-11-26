import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const offices = [
  {
    name: "Dubai Office",
    nameAr: "مكتب دبي",
    coordinates: [55.2708, 25.2048],
    address: "Dubai International Financial Centre, UAE"
  },
  {
    name: "Sharjah Office",
    nameAr: "مكتب الشارقة",
    coordinates: [55.4000, 25.3463],
    address: "Sharjah Business District, UAE"
  },
  {
    name: "Egypt Office",
    nameAr: "مكتب مصر",
    coordinates: [31.2357, 30.0444],
    address: "Cairo Downtown, Egypt"
  }
];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || isInitialized) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [45, 27],
      zoom: 4
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    offices.forEach(office => {
      const el = document.createElement('div');
      el.className = 'w-8 h-8 bg-accent rounded-full border-4 border-background shadow-gold cursor-pointer';
      
      new mapboxgl.Marker(el)
        .setLngLat(office.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<div class="p-2"><h3 class="font-bold">${office.name}</h3><p class="text-sm text-muted-foreground">${office.address}</p></div>`)
        )
        .addTo(map.current!);
    });

    setIsInitialized(true);
  };

  const handleTokenSubmit = () => {
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput);
      initializeMap(tokenInput);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapboxToken) {
    return (
      <div className="w-full h-[500px] bg-muted/30 rounded-lg flex items-center justify-center">
        <div className="max-w-md w-full p-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-serif font-bold">Mapbox Token Required</h3>
            <p className="text-sm text-muted-foreground">
              Please enter your Mapbox public token to display the interactive map.
              Get your token at <a href="https://mapbox.com" target="_blank" className="text-accent hover:underline">mapbox.com</a>
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1Ijo..."
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
            />
          </div>
          <Button onClick={handleTokenSubmit} className="w-full">
            Initialize Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
