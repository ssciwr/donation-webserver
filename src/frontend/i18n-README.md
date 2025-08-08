# Internationalization (i18n) Setup

This project now includes internationalization support with English and French translations.

## Features

- **Language switcher** in the navigation bar
- **Automatic language detection** from browser preferences
- **Persistent language selection** stored in localStorage
- **Fallback system** to English if translations are missing
- **Type-safe translations** with TypeScript support

## Usage

### In Svelte components:

```svelte
<script>
  import { t } from '$lib/i18n';
</script>

<!-- Use reactive translations -->
<h1>{$t.homepage.title}</h1>
<p>{$t.nav.about}</p>
```

### Adding new translations:

1. Edit `src/lib/i18n/translations.ts`
2. Add new keys to both `en` and `fr` objects
3. The TypeScript types will automatically update

### Example translation structure:

```typescript
export const translations = {
  en: {
    nav: {
      about: 'Information',
      contact: 'Kontakt'
    },
    homepage: {
      title: 'Willkommen',
      subtitle: 'Dies ist unsere Webseite'
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      contact: 'Contact'
    },
    homepage: {
      title: 'Bienvenue',
      subtitle: 'Ceci est notre site web'
    }
  }
};
```

## Components

- **LanguageSwitcher**: Dropdown component for switching languages
- **Location**: `src/lib/components/LanguageSwitcher.svelte`

## Language Support

Currently supported languages:
- German (de) - Default
- Français (fr)

## Implementation Details

- Language preference is stored in `localStorage`
- Falls back to browser language detection
- Uses Svelte stores for reactive updates
- Includes TypeScript types for all translation keys
