"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports.injuryOptions = exports.LegOptions = exports.HeadOptions = exports.BodyOptions = exports.ArmOptions = void 0;
// Define options for body parts with their positions on the image
const options = exports.options = [{
  id: "HEAD",
  label: 'Head & Neck',
  style: {
    top: '0%',
    left: '45%',
    width: '10%',
    height: '15%'
  }
}, {
  id: "LEFT_HAND",
  label: 'Left Hand',
  style: {
    top: '17%',
    left: '30%',
    width: '10%',
    height: '40%'
  }
}, {
  id: "RIGHT_HAND",
  label: 'Right Hand',
  style: {
    top: '17%',
    right: '30%',
    width: '10%',
    height: '40%'
  }
}, {
  id: "LEFT_LEG",
  label: 'Left Leg',
  style: {
    top: '53%',
    left: '41%',
    width: '8%',
    height: '47%'
  }
}, {
  id: "RIGHT_LEG",
  label: 'Right Leg',
  style: {
    top: '53%',
    left: '51%',
    width: '8%',
    height: '47%'
  }
}, {
  id: "BODY",
  label: 'Body',
  style: {
    top: '17%',
    left: '42%',
    width: '16%',
    height: '35%'
  }
}];

// Define options for specific body parts
const ArmOptions = exports.ArmOptions = [{
  ref: "ARM_FOREARM",
  label: 'Arm - Forearm'
}, {
  ref: "ARM_UPPER",
  label: 'Arm - Upper'
}, {
  ref: "ELBOW",
  label: 'Elbow'
}, {
  ref: "FINGER_INDEX",
  label: 'Finger - Index'
}, {
  ref: "FINGER_MIDDLE",
  label: 'Finger - Middle'
}, {
  ref: "FINGER_PINKY",
  label: 'Finger - Pinky'
}, {
  ref: "FINGER_RING",
  label: 'Finger - Ring'
}, {
  ref: "HAND",
  label: 'Hand'
}, {
  ref: "THUMB",
  label: 'Thumb'
}, {
  ref: "WRIST",
  label: 'Wrist'
}];
const HeadOptions = exports.HeadOptions = [{
  ref: "BRAIN",
  label: 'Brain'
}, {
  ref: "EAR",
  label: 'Ear'
}, {
  ref: "EYE",
  label: 'Eye'
}, {
  ref: "FACE",
  label: 'Face'
}, {
  ref: "INTERNAL_SYSTEMS_NERVOUS",
  label: 'Internal Systems - Nervous'
}, {
  ref: "LIPS",
  label: 'Lips'
}, {
  ref: "MOUTH",
  label: 'Mouth'
}, {
  ref: "NECK",
  label: 'Neck'
}, {
  ref: "NOSE",
  label: 'Nose'
}, {
  ref: "SCALP",
  label: 'Scalp'
}, {
  ref: "TEETH",
  label: 'Teeth'
}, {
  ref: "TONGUE",
  label: 'Tongue'
}];
const LegOptions = exports.LegOptions = [{
  ref: "ANKLE",
  label: 'Ankle'
}, {
  ref: "BUTTOCK",
  label: 'Buttock'
}, {
  ref: "FOOT",
  label: 'Foot'
}, {
  ref: "KNEE",
  label: 'Knee'
}, {
  ref: "LEG_LOWER",
  label: 'Leg - Lower'
}, {
  ref: "LEG_UPPER",
  label: 'Leg - Upper'
}];
const BodyOptions = exports.BodyOptions = [{
  ref: "ABDOMEN",
  label: 'Abdomen'
}, {
  ref: "BACK",
  label: 'Back'
}, {
  ref: "CHEST",
  label: 'Chest'
}, {
  ref: "GROIN",
  label: 'Groin'
}, {
  ref: "HIP",
  label: 'Hip'
}, {
  ref: "INTERNAL_SYSTEMS_LOWER",
  label: 'Internal Systems - Lower'
}, {
  ref: "INTERNAL_SYSTEMS_UPPER",
  label: 'Internal Systems - Upper'
}, {
  ref: "SHOULDER",
  label: 'Shoulder'
}, {
  ref: "SPINE",
  label: 'Spine'
}, {
  ref: "TOE_BABY",
  label: 'Toe - Baby'
}, {
  ref: "TOE_BIG",
  label: 'Toe - Big'
}, {
  ref: "TOE_LONG",
  label: 'Toe - Long'
}, {
  ref: "TOE_MIDDLE",
  label: 'Toe - Middle'
}, {
  ref: "TOE_RING",
  label: 'Toe - Ring'
}];

// Define options for injury types
const injuryOptions = exports.injuryOptions = [{
  ref: "ABRASION_BLISTER",
  label: 'ABRASION BLISTER'
}, {
  ref: "ABRASION_SCRATCH_SCRAPE",
  label: 'ABRASION SCRATCH SCRAPE'
}, {
  ref: "AMPUTATION",
  label: 'AMPUTATION'
}, {
  ref: "ANIMAL_INSECT_BITE",
  label: 'ANIMAL INSECT BITE'
}, {
  ref: "BRUISE_CONTUSION",
  label: 'BRUISE CONTUSION'
}, {
  ref: "BURN_SCALD",
  label: 'BURN SCALD'
}, {
  ref: "CRUSHING_INJURY",
  label: 'CRUSHING INJURY'
}, {
  ref: "CUT_LACERATION",
  label: 'CUT LACERATION'
}, {
  ref: "DISLOCATION",
  label: 'DISLOCATION'
}, {
  ref: "ELECTRIC_SHOCK_BURN",
  label: 'ELECTRIC SHOCK BURN'
}, {
  ref: "FOREIGN_BODY",
  label: 'FOREIGN BODY'
}, {
  ref: "FRACTURE",
  label: 'FRACTURE'
}, {
  ref: "FROSTBITE",
  label: 'FROSTBITE'
}, {
  ref: "NEOPLASM_TUMOUR_CANCER",
  label: 'NEOPLASM TUMOUR CANCER'
}, {
  ref: "PUNCTURE",
  label: 'PUNCTURE'
}, {
  ref: "RASH_DERMATITIS",
  label: 'RASH DERMATITIS'
}, {
  ref: "SPRAIN_STRAIN_TEAR",
  label: 'SPRAIN STRAIN TEAR'
}];