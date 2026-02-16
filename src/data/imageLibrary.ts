// Image Library - Catalog of all Cailin Mining & Civil photos
// Each image has metadata for contextual placement across the site

// Batch 1 - Training & Equipment shots
export { default as training1on1Dumptruck } from '@/assets/photos/training-1on1-dumptruck.jpg';
export { default as rollerInspection } from '@/assets/photos/roller-inspection.jpg';
export { default as graderCabinAccess } from '@/assets/photos/grader-cabin-access.jpg';
export { default as rollerBoarding } from '@/assets/photos/roller-boarding.jpg';
export { default as dumptruckTrayRaised } from '@/assets/photos/dumptruck-tray-raised.jpg';
export { default as fleetLineupWide } from '@/assets/photos/fleet-lineup-wide.jpg';
export { default as dumptruckHeroBranded } from '@/assets/photos/dumptruck-hero-branded.jpg';
export { default as excavatorOperation } from '@/assets/photos/excavator-operation.jpg';
export { default as rollerArtistic } from '@/assets/photos/roller-artistic.jpg';
export { default as wheelloaderTraining } from '@/assets/photos/wheelloader-training.jpg';

// Batch 2 - Wheelloader & Articulated Truck operations
export { default as wheelloaderProfile } from '@/assets/photos/wheelloader-profile.jpg';
export { default as loaderDumptruckAction } from '@/assets/photos/loader-dumptruck-action.jpg';
export { default as wheelloaderOperator } from '@/assets/photos/wheelloader-operator.jpg';
export { default as wheelloaderWide } from '@/assets/photos/wheelloader-wide.jpg';
export { default as loaderDumptruckFramed } from '@/assets/photos/loader-dumptruck-framed.jpg';
export { default as articulatedDumptruck } from '@/assets/photos/articulated-dumptruck.jpg';
export { default as loaderDumptruckWide } from '@/assets/photos/loader-dumptruck-wide.jpg';
export { default as loaderLoadingDumptruck } from '@/assets/photos/loader-loading-dumptruck.jpg';
export { default as wheelloaderHero } from '@/assets/photos/wheelloader-hero.jpg';
export { default as loaderDumptruckPair } from '@/assets/photos/loader-dumptruck-pair.jpg';

// Batch 3 - Loading action & Trainer supervision shots
export { default as loaderDumpingAction } from '@/assets/photos/loader-dumping-action.jpg';
export { default as wheelloaderFullBucket } from '@/assets/photos/wheelloader-full-bucket.jpg';
export { default as loaderDumpDust } from '@/assets/photos/loader-dump-dust.jpg';
export { default as loaderDumpWide } from '@/assets/photos/loader-dump-wide.jpg';
export { default as loaderDumpGrassy } from '@/assets/photos/loader-dump-grassy.jpg';
export { default as trainerSupervising } from '@/assets/photos/trainer-supervising.jpg';
export { default as trainerSiteSafety } from '@/assets/photos/trainer-site-safety.jpg';
export { default as trainerWatchingLoader } from '@/assets/photos/trainer-watching-loader.jpg';
export { default as trainerLoaderFramed } from '@/assets/photos/trainer-loader-framed.jpg';
export { default as trainerLoaderRear } from '@/assets/photos/trainer-loader-rear.jpg';

// Batch 4 - Trainer radio communication & staff portraits
export { default as trainerRadioDirecting } from '@/assets/photos/trainer-radio-directing.jpg';
export { default as trainerRadioSignaling } from '@/assets/photos/trainer-radio-signaling.jpg';
export { default as loaderTrainerForeground } from '@/assets/photos/loader-trainer-foreground.jpg';
export { default as trainerWatchingRear } from '@/assets/photos/trainer-watching-rear.jpg';
export { default as loaderBucketFullTrainer } from '@/assets/photos/loader-bucket-full-trainer.jpg';
export { default as loaderDumpingTrainer } from '@/assets/photos/loader-dumping-trainer.jpg';
export { default as loaderFrontDramatic } from '@/assets/photos/loader-front-dramatic.jpg';
export { default as loaderFrontPortrait } from '@/assets/photos/loader-front-portrait.jpg';
export { default as catDumptruckLoaderPair } from '@/assets/photos/cat-dumptruck-loader-pair.jpg';
export { default as staffPortraitDumptruck } from '@/assets/photos/staff-portrait-dumptruck.jpg';

// Batch 5 - Excavator training, female trainers & success stories
export { default as excavatorTraining1on1 } from '@/assets/photos/excavator-training-1on1.jpg';
export { default as safetyEquipmentCheck } from '@/assets/photos/safety-equipment-check.jpg';
export { default as trainerExcavatorDistance } from '@/assets/photos/trainer-excavator-distance.jpg';
export { default as loaderDumpSunflare } from '@/assets/photos/loader-dump-sunflare.jpg';
export { default as womenEquipmentInspection } from '@/assets/photos/women-equipment-inspection.jpg';
export { default as workersSiteOffice } from '@/assets/photos/workers-site-office.jpg';
export { default as femaleTrainerInstructing } from '@/assets/photos/female-trainer-instructing.jpg';
export { default as femaleTrainerCloseup } from '@/assets/photos/female-trainer-closeup.jpg';
export { default as cabinInteriorControls } from '@/assets/photos/cabin-interior-controls.jpg';
export { default as traineePlacedSuccess } from '@/assets/photos/trainee-placed-success.jpg';
// Image metadata for reference
export const imageMetadata = {
  // Batch 1
  'training-1on1-dumptruck': {
    equipment: ['Dump Truck'],
    context: ['training', '1:1', 'instructor'],
    hasBranding: true,
    recommended: ['about', 'index-about', 'rpl'],
  },
  'roller-inspection': {
    equipment: ['Roller'],
    context: ['pre-start', 'inspection', 'voc'],
    hasBranding: false,
    recommended: ['voc', 'roller-courses'],
  },
  'grader-cabin-access': {
    equipment: ['Grader'],
    context: ['access', 'training'],
    hasBranding: false,
    recommended: ['tickets-training', 'grader-courses'],
  },
  'roller-boarding': {
    equipment: ['Roller', 'Excavator', 'Dump Truck'],
    context: ['boarding', 'multi-equipment'],
    hasBranding: false,
    recommended: ['courses', 'fleet'],
  },
  'dumptruck-tray-raised': {
    equipment: ['Dump Truck'],
    context: ['operation', 'tipping'],
    hasBranding: true,
    recommended: ['short-courses', 'moxy-courses'],
  },
  'fleet-lineup-wide': {
    equipment: ['Multiple'],
    context: ['fleet', 'panoramic', 'mine-site'],
    hasBranding: true,
    recommended: ['index-hero', 'about', 'careers'],
  },
  'dumptruck-hero-branded': {
    equipment: ['Dump Truck'],
    context: ['hero', 'branded'],
    hasBranding: true,
    recommended: ['hero', 'careers'],
  },
  'excavator-operation': {
    equipment: ['Excavator'],
    context: ['operation', 'branded'],
    hasBranding: true,
    recommended: ['excavator-courses', 'index-courses'],
  },
  'roller-artistic': {
    equipment: ['Roller'],
    context: ['artistic', 'framed'],
    hasBranding: false,
    recommended: ['roller-courses', 'gallery'],
  },
  'wheelloader-training': {
    equipment: ['Wheel Loader'],
    context: ['training', 'operation'],
    hasBranding: false,
    recommended: ['loader-courses', 'tickets-training'],
  },
  
  // Batch 2
  'wheelloader-profile': {
    equipment: ['Wheel Loader'],
    context: ['profile', 'stationary', 'mine-site'],
    hasBranding: false,
    recommended: ['loader-courses', 'equipment'],
  },
  'loader-dumptruck-action': {
    equipment: ['Wheel Loader', 'Articulated Dump Truck'],
    context: ['action', 'loading', 'dust'],
    hasBranding: false,
    recommended: ['courses-hero', 'bundles'],
  },
  'wheelloader-operator': {
    equipment: ['Wheel Loader'],
    context: ['operator-visible', 'operation'],
    hasBranding: false,
    recommended: ['training', 'about'],
  },
  'wheelloader-wide': {
    equipment: ['Wheel Loader'],
    context: ['wide-shot', 'mine-site'],
    hasBranding: false,
    recommended: ['hero', 'courses'],
  },
  'loader-dumptruck-framed': {
    equipment: ['Wheel Loader', 'Articulated Dump Truck'],
    context: ['framed', 'foreground'],
    hasBranding: false,
    recommended: ['courses', 'bundles'],
  },
  'articulated-dumptruck': {
    equipment: ['Articulated Dump Truck'],
    context: ['profile', 'moxy'],
    hasBranding: true,
    recommended: ['moxy-courses', 'careers'],
  },
  'loader-dumptruck-wide': {
    equipment: ['Wheel Loader', 'Articulated Dump Truck'],
    context: ['wide', 'action'],
    hasBranding: false,
    recommended: ['index', 'courses'],
  },
  'loader-loading-dumptruck': {
    equipment: ['Wheel Loader', 'Articulated Dump Truck'],
    context: ['loading', 'dust', 'action'],
    hasBranding: false,
    recommended: ['index-hero', 'bundles'],
  },
  'wheelloader-hero': {
    equipment: ['Wheel Loader'],
    context: ['hero', 'operator-visible', 'professional'],
    hasBranding: false,
    recommended: ['loader-courses', 'tickets-training-hero'],
  },
  'loader-dumptruck-pair': {
    equipment: ['Wheel Loader', 'Articulated Dump Truck'],
    context: ['pair', 'side-by-side'],
    hasBranding: false,
    recommended: ['bundles', 'discovery-call'],
  },
};
