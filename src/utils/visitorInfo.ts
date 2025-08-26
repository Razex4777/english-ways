// Utility to get comprehensive visitor information
interface VisitorInfo {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: string;
    lon: string;
    timezone: string;
    isp: string;
  };
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

// Get IP and location information
const getIPInfo = async (): Promise<{ ip: string; location: any }> => {
  try {
    // Try multiple free IP geolocation services (all HTTPS)
    const services = [
      'https://ipapi.co/json/',
      'https://api.ipify.org?format=json',
      'https://httpbin.org/ip'
    ];

    let ipData = null;
    let locationData = null;

    // Try the first service (ipapi.co - comprehensive with HTTPS)
    try {
      const response = await fetch(services[0], {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        ipData = data.ip;
        locationData = {
          country: data.country_name || data.country || 'Unknown',
          region: data.region || 'Unknown',
          city: data.city || 'Unknown',
          lat: data.latitude?.toString() || '0',
          lon: data.longitude?.toString() || '0',
          timezone: data.timezone || 'Unknown',
          isp: data.org || 'Unknown'
        };
      }
    } catch (error) {
      console.log('First IP service failed, trying backup...');
    }

    // If first service failed, try ipify.org (IP only)
    if (!ipData) {
      try {
        const response = await fetch(services[1], {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });

        if (response.ok) {
          const data = await response.json();
          ipData = data.ip;
          locationData = {
            country: 'Unknown',
            region: 'Unknown',
            city: 'Unknown',
            lat: '0',
            lon: '0',
            timezone: 'Unknown',
            isp: 'Unknown'
          };
        }
      } catch (error) {
        console.log('Second IP service failed, trying final backup...');
      }
    }

    // If all else fails, try httpbin.org
    if (!ipData) {
      try {
        const response = await fetch(services[2]);
        if (response.ok) {
          const data = await response.json();
          ipData = data.origin; // httpbin.org returns IP in 'origin' field
          locationData = {
            country: 'Unknown',
            region: 'Unknown',
            city: 'Unknown',
            lat: '0',
            lon: '0',
            timezone: 'Unknown',
            isp: 'Unknown'
          };
        }
      } catch (error) {
        console.error('All IP services failed:', error);
        ipData = 'Unknown';
        locationData = {
          country: 'Unknown',
          region: 'Unknown',
          city: 'Unknown',
          lat: '0',
          lon: '0',
          timezone: 'Unknown',
          isp: 'Unknown'
        };
      }
    }

    return { ip: ipData, location: locationData };
  } catch (error) {
    console.error('Error getting IP info:', error);
    return {
      ip: 'Unknown',
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
  }
};

// Main function to get all visitor information
export const getVisitorInfo = async (): Promise<VisitorInfo> => {
  try {
    // Get IP and location info
    const { ip, location } = await getIPInfo();

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
      location: {
        country: location.country,
        region: location.region,
        city: location.city,
        lat: location.lat,
        lon: location.lon,
        timezone: location.timezone,
        isp: location.isp
      },
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

    return visitorInfo;
  } catch (error) {
    console.error('Error getting visitor info:', error);
    return {
      ip: 'Unknown',
      location: {
        country: 'Unknown',
        region: 'Unknown',
        city: 'Unknown',
        lat: '0',
        lon: '0',
        timezone: 'Unknown',
        isp: 'Unknown'
      },
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







