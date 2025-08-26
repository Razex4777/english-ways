// Utility to get comprehensive visitor information
interface VisitorInfo {
  ip: string;
  location: LocationData;
  device: {
    userAgent: string;
    platform: string;
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    deviceType: string;
    screenResolution: string;
    language: string;
    languages: string[];
    timezone: string;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouchDevice: boolean;
  };
  timestamp: string;
  mapUrl: string;
}

// Get browser information
const getBrowserInfo = (): { browser: string; version: string } => {
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
  let version = 'Unknown';

  // Detect browser
  if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edg') === -1) {
    browser = 'Chrome';
    const match = userAgent.match(/Chrome\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('Firefox') > -1) {
    browser = 'Firefox';
    const match = userAgent.match(/Firefox\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    browser = 'Safari';
    const match = userAgent.match(/Version\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('Edg') > -1) {
    browser = 'Edge';
    const match = userAgent.match(/Edg\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    browser = 'Opera';
    const match = userAgent.match(/(?:Opera|OPR)\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  }

  return { browser, version };
};

// Get operating system information
const getOSInfo = (): { os: string; version: string } => {
  const userAgent = navigator.userAgent;
  let os = 'Unknown';
  let version = 'Unknown';

  if (userAgent.indexOf('Windows NT') > -1) {
    os = 'Windows';
    const match = userAgent.match(/Windows NT (\d+\.\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('Mac OS X') > -1) {
    os = 'macOS';
    const match = userAgent.match(/Mac OS X (\d+[_\d]*)/);
    version = match ? match[1].replace(/_/g, '.') : 'Unknown';
  } else if (userAgent.indexOf('Linux') > -1) {
    os = 'Linux';
    version = 'Unknown';
  } else if (userAgent.indexOf('Android') > -1) {
    os = 'Android';
    const match = userAgent.match(/Android (\d+\.\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.indexOf('iOS') > -1 || userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) {
    os = 'iOS';
    const match = userAgent.match(/OS (\d+[_\d]*)/);
    version = match ? match[1].replace(/_/g, '.') : 'Unknown';
  }

  return { os, version };
};

// Get device type information
const getDeviceInfo = (): { deviceType: string; isMobile: boolean; isTablet: boolean; isDesktop: boolean; isTouchDevice: boolean } => {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  let deviceType = 'Desktop';
  let isMobile = false;
  let isTablet = false;
  let isDesktop = true;

  // Check for mobile devices
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    isDesktop = false;
    if (/iPad|Tablet/i.test(userAgent) || (screenWidth >= 768 && screenWidth <= 1024)) {
      isTablet = true;
      deviceType = 'Tablet';
    } else {
      isMobile = true;
      deviceType = 'Mobile';
    }
  }

  // Check for touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return {
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isTouchDevice
  };
};

// Interface for standardized location data
interface LocationData {
  country: string;
  region: string;
  city: string;
  lat: string;
  lon: string;
  timezone: string;
  isp: string;
}

// Interface for IP service configuration
interface IPService {
  name: string;
  url: string;
  parser: (data: any) => { ip: string; location: LocationData };
}

// High-quality IP geolocation services (based on research)
const IP_SERVICES: IPService[] = [
  {
    name: 'IPGeolocation.io',
    url: 'https://api.ipgeolocation.io/ipgeo?apiKey=',
    parser: (data) => ({
      ip: data.ip,
      location: {
        country: data.country_name || 'Unknown',
        region: data.state_prov || data.district || 'Unknown',
        city: data.city || 'Unknown',
        lat: data.latitude?.toString() || '0',
        lon: data.longitude?.toString() || '0',
        timezone: data.time_zone?.name || 'Unknown',
        isp: data.isp || 'Unknown'
      }
    })
  },
  {
    name: 'Abstract API',
    url: 'https://ipgeolocation.abstractapi.com/v1/?api_key=',
    parser: (data) => ({
      ip: data.ip_address,
      location: {
        country: data.country || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        lat: data.latitude?.toString() || '0',
        lon: data.longitude?.toString() || '0',
        timezone: data.timezone?.name || 'Unknown',
        isp: data.connection?.organization_name || 'Unknown'
      }
    })
  },
  {
    name: 'IPapi.co',
    url: 'https://ipapi.co/json/',
    parser: (data) => ({
      ip: data.ip,
      location: {
        country: data.country_name || data.country || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        lat: data.latitude?.toString() || '0',
        lon: data.longitude?.toString() || '0',
        timezone: data.timezone || 'Unknown',
        isp: data.org || 'Unknown'
      }
    })
  },
  {
    name: 'IPinfo.io',
    url: 'https://ipinfo.io/json?token=',
    parser: (data) => ({
      ip: data.ip,
      location: {
        country: data.country || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        lat: data.loc?.split(',')[0] || '0',
        lon: data.loc?.split(',')[1] || '0',
        timezone: data.timezone || 'Unknown',
        isp: data.org || 'Unknown'
      }
    })
  },
  {
    name: 'IP-API.com',
    url: 'https://ip-api.com/json/',
    parser: (data) => ({
      ip: data.query,
      location: {
        country: data.country || 'Unknown',
        region: data.regionName || 'Unknown',
        city: data.city || 'Unknown',
        lat: data.lat?.toString() || '0',
        lon: data.lon?.toString() || '0',
        timezone: data.timezone || 'Unknown',
        isp: data.isp || 'Unknown'
      }
    })
  }
];

// Fallback IP-only services
const FALLBACK_IP_SERVICES = [
  'https://api.ipify.org?format=json',
  'https://httpbin.org/ip',
  'https://icanhazip.com',
  'https://ident.me'
];

// Get IP and location information with comprehensive fallback
const getIPInfo = async (): Promise<{ ip: string; location: LocationData }> => {
  console.log('🔍 Starting comprehensive IP geolocation lookup...');
  
  // Try high-quality geolocation services first
  for (const service of IP_SERVICES) {
    try {
      console.log(`🌐 Trying ${service.name}...`);
      
      const response = await fetch(service.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; LocationService/1.0)'
        },
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`✅ ${service.name} response:`, data);
        
        // Check if we got valid data
        if (data && (data.ip || data.query || data.ip_address)) {
          const result = service.parser(data);
          
          // Validate the result has meaningful data
          if (result.ip && result.ip !== 'Unknown' && 
              result.location.country !== 'Unknown' && 
              result.location.country !== '') {
            console.log(`🎯 Successfully got location from ${service.name}:`, result);
            return result;
          }
        }
      } else {
        console.log(`❌ ${service.name} returned status: ${response.status}`);
      }
    } catch (error) {
      console.log(`⚠️ ${service.name} failed:`, error);
    }
  }

  console.log('🔄 All geolocation services failed, trying IP-only fallbacks...');
  
  // If all geolocation services fail, try to at least get the IP
  let fallbackIP = 'Unknown';
  
  for (const fallbackUrl of FALLBACK_IP_SERVICES) {
    try {
      console.log(`🔍 Trying fallback: ${fallbackUrl}`);
      
      const response = await fetch(fallbackUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });

      if (response.ok) {
        const text = await response.text();
        let data;
        
        try {
          data = JSON.parse(text);
          fallbackIP = data.ip || data.origin || 'Unknown';
        } catch {
          // Plain text response
          fallbackIP = text.trim();
        }
        
        if (fallbackIP && fallbackIP !== 'Unknown') {
          console.log(`✅ Got IP from fallback: ${fallbackIP}`);
          break;
        }
      }
    } catch (error) {
      console.log(`⚠️ Fallback ${fallbackUrl} failed:`, error);
    }
  }

  // Return with fallback data
  const fallbackResult = {
    ip: fallbackIP,
    location: {
      country: 'Unknown',
      region: 'Unknown', 
      city: 'Unknown',
      lat: '0',
      lon: '0',
      timezone: 'Unknown',
      isp: 'Unknown'
    }
  };
  
  console.log('📍 Final result (with fallbacks):', fallbackResult);
  return fallbackResult;
};

// Main function to get all visitor information
export const getVisitorInfo = async (): Promise<VisitorInfo> => {
  try {
    console.log('🚀 [VisitorInfo] Starting comprehensive visitor information collection...');
    
    // Get IP and location info
    const { ip, location } = await getIPInfo();
    console.log('🌍 [VisitorInfo] Location data obtained:', { ip, location });

    // Get browser info
    const { browser, version: browserVersion } = getBrowserInfo();

    // Get OS info
    const { os, version: osVersion } = getOSInfo();

    // Get device info
    const deviceInfo = getDeviceInfo();

    // Generate map URL if coordinates are available
    const mapUrl = location.lat !== '0' && location.lon !== '0'
      ? `https://www.google.com/maps?q=${location.lat},${location.lon}`
      : 'Location not available';

    const visitorInfo: VisitorInfo = {
      ip,
      location,
      device: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        browser,
        browserVersion,
        os,
        osVersion,
        deviceType: deviceInfo.deviceType,
        screenResolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        languages: Array.from(navigator.languages || []),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        isMobile: deviceInfo.isMobile,
        isTablet: deviceInfo.isTablet,
        isDesktop: deviceInfo.isDesktop,
        isTouchDevice: deviceInfo.isTouchDevice
      },
      timestamp: new Date().toISOString(),
      mapUrl
    };

    console.log('✅ [VisitorInfo] Complete visitor information collected:', visitorInfo);
    return visitorInfo;
  } catch (error) {
    console.error('Error getting visitor info:', error);
    
    const fallbackLocation: LocationData = {
      country: 'Unknown',
      region: 'Unknown',
      city: 'Unknown',
      lat: '0',
      lon: '0',
      timezone: 'Unknown',
      isp: 'Unknown'
    };
    
    return {
      ip: 'Unknown',
      location: fallbackLocation,
      device: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        browser: 'Unknown',
        browserVersion: 'Unknown',
        os: 'Unknown',
        osVersion: 'Unknown',
        deviceType: 'Unknown',
        screenResolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        languages: Array.from(navigator.languages || []),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTablet: /iPad|Tablet/i.test(navigator.userAgent),
        isDesktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
      },
      timestamp: new Date().toISOString(),
      mapUrl: 'Location not available'
    };
  }
};

// Export individual functions for specific needs
export { getBrowserInfo, getOSInfo, getDeviceInfo, getIPInfo };







