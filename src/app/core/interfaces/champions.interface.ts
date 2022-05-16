namespace IChampion {
  export type Class =
    | 'ASS'
    | 'SKI'
    | 'DIV'
    | 'JUG'
    | 'VAN'
    | 'WAR'
    | 'CAT'
    | 'ENC'
    | 'ART'
    | 'BUR'
    | 'BAT'
    | 'SPE'
    | 'MAR';

  export type Position = 'TOP' | 'JUN' | 'MID' | 'ADC' | 'SUP';
  export type Range = 'MEELE' | 'SHORT' | 'MID' | 'LONG';
  export type DamageProfile = 'PHYSICAL' | 'MAGIC' | 'HYBRID' | 'UTIL';

  export type ContributionProfile =
    | 'CC_AOE'
    | 'CC_IMPACT'
    | 'CC_SINGLE_TARGET'
    | 'CC_RANGE'
    | 'SUSTAIN'
    | 'UTILITY'
    | 'ENGAGE'
    | 'PEEL'
    | 'DMG_SINGLE_TARGET'
    | 'DMG_AOE'
    | 'DMG_DPS'
    | 'BURST'
    | 'POKE'
    | 'MITIGATION'
    | 'REPOSITION'
    | 'SKIRMISH'
    | 'SPLIT'
    | 'SIEGE'
    | 'ZONE_CONTROL'
    | 'WAVE_CLEAR';

  export type Playstyle =
    | 'SPLIT'
    | 'PROT'
    | 'PICK'
    | 'ENGAGE'
    | 'SIEGE'
    | 'PROTECT';

  export type InvadeProfile = 'SAFE' | 'FOLLOW' | 'INVADE' | 'COUNTER';

  export interface Invade {
    type: InvadeProfile;
    name: string;
    text: string;
    color: string;
  }

  export interface Champion {
    id: string;
    name: string;
    class: Class[];
    icon: string;
    positions: Position[];
    range: Range;
    damage: Damage;
    contribution: Contribution;
    scaling: Scaling;
    invade: Invade[];
    playstyle: Playstyle[];
  }

  export interface Damage {
    type: DamageProfile;
    amount: number;
  }

  export type Contribution = {
    [key in ContributionProfile]?: number;
  };

  export interface Scaling {
    early: number;
    mid: number;
    late: number;
  }
}
