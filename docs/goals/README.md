---
looper: 1
chain: [russian, french, urdu, japanese]
floor:
  - id: build-output
    name: "the build writes the page, the bundle and the service worker"
    run: [bun, test, tools/build.test.ts]
    tests: [build_writes_page_bundle_and_worker, build_uses_only_relative_urls]
    from: foundation
  - id: licenses-named
    name: every third-party folder and dependency names its license
    run: [bun, test, tools/licenses.test.ts]
    tests: [every_asset_folder_has_a_license_file, every_runtime_dependency_is_in_the_notices, build_copies_every_license_text]
    from: foundation
  - id: types
    name: the whole tree type-checks
    run: [bun, x, tsc]
    from: foundation
  - id: smf-read
    name: the reader handles every event kind and rejects broken files
    run: [bun, test, src/midi/smf-read.test.ts]
    tests: [reads_running_status, reads_meta_and_sysex_events, rejects_a_truncated_track_without_hanging]
    from: midi-core
  - id: tempo-map
    name: "ticks, seconds, measures and beats convert both ways"
    run: [bun, test, src/midi/tempo-map.test.ts]
    tests: [ticks_to_seconds_across_tempo_changes, measure_and_beat_of_a_time_across_signature_changes]
    from: midi-core
  - id: round-trip
    name: a written file reads back to the same events
    run: [bun, test, src/midi/smf-write.test.ts]
    tests: [write_then_read_gives_the_same_events]
    from: midi-core
  - id: library-parses
    name: every song of the library parses into a playable song
    run: [bun, test, src/midi/library-songs.test.ts]
    tests: [every_library_song_parses_with_notes_and_a_duration]
    from: midi-core
  - id: store
    name: "settings keep their defaults, ranges and saved values"
    run: [bun, test, src/settings/store.test.ts]
    tests: [a_value_outside_its_range_is_clamped, saved_values_survive_a_reload, an_unknown_saved_key_is_dropped]
    from: settings
  - id: coverage
    name: every reference setting is in the schema or owned by a later goal
    run: [bun, test, src/settings/coverage.test.ts]
    tests: [every_reference_setting_is_covered_or_pending]
    from: settings
  - id: export-import
    name: settings export and import back to the same values
    run: [bun, test, src/settings/export.test.ts]
    tests: [export_then_import_restores_every_value]
    from: settings
  - id: envelope
    name: envelope and velocity curves give the expected gains
    run: [bun, test, src/audio/envelope.test.ts]
    tests: [release_after_pedal_uses_the_pedal_release, velocity_strength_shapes_the_gain]
    from: audio-engine
  - id: scheduler
    name: "the scheduler plays each note once, on time, at any speed"
    run: [bun, test, src/audio/scheduler.test.ts]
    tests: [each_note_is_scheduled_once_across_windows, a_seek_schedules_no_past_notes, speed_scales_the_note_times]
    from: audio-engine
  - id: impulse
    name: generated impulse responses decay as their preset says
    run: [bun, test, src/audio/impulse.test.ts]
    tests: [impulse_decays_to_silence_within_its_length]
    from: audio-engine
  - id: key-layout
    name: "keys sit where a real piano puts them, for any range"
    run: [bun, test, src/render/key-layout.test.ts]
    tests: [eighty_eight_keys_span_fifty_two_white_keys, black_keys_sit_between_their_white_neighbours, fit_range_covers_every_note_of_a_song]
    from: renderer-3d
  - id: note-window
    name: only notes inside the visible time window are drawn
    run: [bun, test, src/render/note-window.test.ts]
    tests: [window_holds_exactly_the_notes_that_overlap_it, long_notes_starting_before_the_window_are_kept]
    from: renderer-3d
  - id: note-hover
    name: "hovering a note bar finds that note, a black-key bar before the white one beneath"
    run: [bun, test, src/render/notes.test.ts]
    tests: [hover_finds_the_note_under_the_pointer, hover_prefers_a_black_key_bar_over_the_white_one_beneath]
    from: renderer-3d
  - id: scene-e2e
    name: "the overlays show on request, and cameras and glow switch without errors"
    run: [bun, x, playwright, test, e2e/scene.e2e.ts]
    tests: [fps_and_bpm_overlays_show_when_turned_on, camera_presets_and_glow_switch_without_errors]
    from: renderer-3d
  - id: keyboard-presets
    name: "presets, typed ranges, octave shifts and note names stay on a real keyboard"
    run: [bun, test, src/keyboard/range.test.ts]
    tests: [every_preset_spans_its_named_number_of_keys_on_white_ends, a_preset_moved_by_octaves_is_still_that_preset, shifting_stops_at_the_ends_of_the_88_keys, a_typed_range_is_ordered_clamped_and_widened_to_white_keys, a_note_outside_the_range_folds_in_by_octaves, note_names_read_back_to_the_same_pitch]
    from: keyboard-range
  - id: keyboard-e2e
    name: the piano on screen follows the chosen keyboard
    run: [bun, x, playwright, test, e2e/keyboard.e2e.ts]
    tests: [choosing_a_preset_redraws_the_piano_with_its_keys, a_typed_first_and_last_note_survive_a_reload, octave_buttons_move_the_range]
    from: keyboard-range
  - id: song-fit
    name: "a song's notes map onto the learner's keyboard"
    run: [bun, test, src/keyboard/song-fit.test.ts]
    tests: [notes_outside_the_keyboard_are_left_to_the_app, folded_notes_land_on_the_nearest_octave_in_range, every_catalog_song_names_its_lowest_and_highest_note]
    from: keyboard-range
  - id: clock
    name: "song time follows the audio clock through speed changes, pauses and seeks"
    run: [bun, test, src/play/clock.test.ts]
    tests: [speed_change_keeps_the_current_song_time, pause_and_resume_do_not_drift, seek_moves_song_time_exactly]
    from: transport
  - id: loop
    name: loops restart on time and the trainer raises the speed
    run: [bun, test, src/play/loop.test.ts]
    tests: [loop_restarts_at_its_start_measure_after_the_count_in, trainer_raises_speed_after_a_clean_pass]
    from: transport
  - id: hotkeys
    name: hotkeys run their action and can be rebound
    run: [bun, test, src/play/hotkeys.test.ts]
    tests: [a_rebound_key_runs_its_action, a_key_in_a_text_field_runs_nothing]
    from: transport
  - id: learn-range
    name: "the learner's lowest and highest key set the keyboard range"
    run: [bun, test, src/input/learn-range.test.ts]
    tests: [two_presses_set_the_range_in_either_order, a_learned_range_is_normalized]
    from: input-and-modes
  - id: wait-mode
    name: the song waits for the required notes of the chosen hands
    run: [bun, test, src/input/wait-mode.test.ts]
    tests: [song_waits_until_every_chord_note_is_held, a_hand_left_out_is_played_by_the_app, notes_outside_the_range_need_not_be_played]
    from: input-and-modes
  - id: scoring
    name: each played note gets one judgement in its time window
    run: [bun, test, src/input/scoring.test.ts]
    tests: [a_note_inside_the_window_is_a_hit_once, a_wrong_pitch_is_a_mistake, unplayed_notes_become_misses]
    from: input-and-modes
  - id: recording
    name: a recording saves as a MIDI file with the played timing
    run: [bun, test, src/input/recorder.test.ts]
    tests: [recording_writes_the_played_notes_in_order]
    from: input-and-modes
  - id: search
    name: "search finds songs by composer, title and difficulty"
    run: [bun, test, src/library/search.test.ts]
    tests: [search_ignores_accents_and_case, difficulty_filter_keeps_only_its_range, fits_my_keyboard_keeps_only_songs_inside_the_range]
    from: song-library
  - id: track-settings
    name: track settings persist per song and fall back to the defaults
    run: [bun, test, src/library/track-settings.test.ts]
    tests: [a_new_song_takes_the_track_defaults, a_changed_track_keeps_its_setting_on_reopen]
    from: song-library
  - id: song-notation
    name: a bar of the song notation must fill its time
    run: [bun, test, tools/song-notation.test.ts]
    tests: [a_bar_that_does_not_fill_its_time_throws]
    from: song-library
  - id: names-and-key
    name: "notes are named in letters or solfège and the key is found"
    run: [bun, test, src/theory/key.test.ts]
    tests: [c_major_scale_is_found_as_c_major, a_minor_melody_is_found_as_a_minor, solfege_names_follow_the_letters]
    from: theory
  - id: chords
    name: chords and their Roman numerals are named
    run: [bun, test, src/theory/chords.test.ts]
    tests: [inverted_triads_keep_their_root, dominant_seventh_in_c_is_v7, unclear_note_sets_get_no_name]
    from: theory
  - id: fingering
    name: generated fingerings are playable
    run: [bun, test, src/theory/fingering.test.ts]
    tests: [c_major_scale_gets_the_standard_fingering, no_finger_crosses_without_the_thumb]
    from: theory
  - id: quantize
    name: "notes become measures of note values, rests and ties"
    run: [bun, test, src/sheet/quantize.test.ts]
    tests: [a_note_across_a_barline_is_tied, rests_below_the_minimum_value_are_hidden, low_tracks_get_a_bass_clef]
    from: sheet-music
  - id: engrave
    name: "a measure engraves with correct stems, beams and accidentals"
    run: [bun, test, src/sheet/engrave.test.ts]
    tests: [stems_point_away_from_the_middle_line, eighths_in_one_beat_share_a_beam, accidentals_follow_the_key_signature]
    from: sheet-music
  - id: particles
    name: several particle presets run together within their particle budget
    run: [bun, test, src/render/particles.test.ts]
    tests: [two_active_presets_both_spawn, the_pool_never_exceeds_its_budget]
    from: effects-and-extras
  - id: pdf
    name: the PDF writer makes a valid file
    run: [bun, test, src/export/pdf.test.ts]
    tests: [pdf_has_a_valid_cross_reference_table, pdf_holds_one_page_per_screen]
    from: effects-and-extras
  - id: sound-import
    name: "the importer maps an SFZ, finds each note's onset and sizes its tail"
    run: [bun, test, tools/import-sounds.test.ts]
    tests: [sfz_regions_map_to_notes_and_layers, onset_is_the_first_loud_sample, tail_ends_where_the_note_falls_silent]
    from: piano-sounds
  - id: musicxml
    name: a MusicXML score converts to the same notes as its MIDI
    run: [bun, test, src/midi/musicxml.test.ts]
    tests: [musicxml_notes_match_their_midi, ties_and_repeats_are_expanded]
    from: more-songs
  - id: song-licenses
    name: every catalog song names an allowed license and a credit
    run: [bun, test, tools/song-licenses.test.ts]
    tests: [every_catalog_song_has_an_allowed_license, every_song_folder_is_in_the_notices]
    from: more-songs
  - id: cache-groups
    name: every public file belongs to exactly one cache group
    run: [bun, test, src/pwa/cache-groups.test.ts]
    tests: [every_public_file_is_in_one_group]
    from: offline-release
  - id: coverage-complete
    name: no reference setting is still pending
    run: [bun, test, src/settings/coverage.test.ts]
    tests: [every_reference_setting_is_covered_or_pending, no_reference_setting_is_pending]
    from: offline-release
  - id: song-meter
    name: the meter measures every limit and sorts the first-year books
    run: [bun, test, tools/song-meter.test.ts]
    tests: [every_limit_is_measured_on_a_fixture, a_version_that_fits_the_rarity_below_does_not_earn_its_own, a_lost_hook_is_refused, the_first_year_books_land_in_epic_or_legendary]
    from: song-rarities
  - id: our-songs
    name: every song of ours earns its rarities and carries a complete guide
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_song_of_ours_earns_its_rarities, every_guide_is_complete, the_files_match_their_source]
    from: song-rarities
  - id: moved-songs
    name: "a learner's stored work follows a moved song"
    run: [bun, test, src/library/moved-songs.test.ts]
    tests: [stored_fingers_and_tracks_follow_a_moved_song]
    from: song-rarities
  - id: christmas-collection
    name: the Christmas collection holds every Christmas song of ours
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_christmas_song_is_in_the_collection, a_song_is_found_by_another_title]
    from: christmas-songs
  - id: film-and-sea-collections
    name: the film and sea collections hold every film song and shanty of ours
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_film_song_is_in_the_collection, every_shanty_is_in_the_collection, a_tune_of_our_own_needs_no_public_domain_years]
    from: film-songs
  - id: tokens
    name: every token is on its scale and every text colour meets its contrast
    run: [bun, test, src/ui/tokens.test.ts]
    tests: [every_text_colour_meets_its_contrast_in_both_themes, every_space_token_is_on_the_grid]
    from: site-design-system
  - id: layout-geometry
    name: "the layout checks find overlaps, clipped text and low contrast"
    run: [bun, test, src/ui/layout-geometry.test.ts]
    tests: [overlapping_boxes_are_reported, a_box_inside_its_parent_is_not_clipped, contrast_follows_the_wcag_formula]
    from: site-design-system
  - id: gallery
    name: the gallery shows every component in every state and passes the layout checks
    run: [bun, x, playwright, test, e2e/design.e2e.ts]
    tests: [the_gallery_passes_the_layout_checks, every_component_shows_every_state]
    from: site-design-system
  - id: routes
    name: every route has a page in every locale with links relative to its depth
    run: [bun, test, src/site/routes.test.ts]
    tests: [every_route_has_a_page_in_every_locale, a_page_links_its_assets_relative_to_its_depth]
    from: site-shell
  - id: route-pages
    name: the build writes a page per route and locale
    run: [bun, test, tools/build.test.ts]
    tests: [build_writes_a_page_per_route_and_locale]
    from: site-shell
  - id: messages
    name: "every locale holds every message, and plurals and numbers follow the locale"
    run: [bun, test, src/i18n/i18n.test.ts]
    tests: [every_locale_has_every_message, plurals_and_numbers_follow_the_locale, the_first_visit_takes_the_browser_language]
    from: site-shell
  - id: site-e2e
    name: "the top bar, the language switch, the history and offline reloads work on every route"
    run: [bun, x, playwright, test, e2e/site.e2e.ts]
    tests: [the_top_bar_reaches_learn_and_play, the_language_switch_keeps_the_page, the_top_bar_hides_in_fullscreen, back_and_forward_restore_the_page_and_its_scroll, the_landing_page_loads_no_player_code, every_route_reloads_offline]
    from: site-shell
  - id: landing-e2e
    name: "the landing page passes the layout checks, plays, and moves only when allowed"
    run: [bun, x, playwright, test, e2e/landing.e2e.ts]
    tests: [the_landing_page_passes_the_layout_checks, both_calls_to_action_open_their_part, the_hero_piano_plays_a_pressed_key, the_rarity_showcase_switches_the_version, reduced_motion_stops_every_animation, the_landing_page_shifts_nothing_while_it_loads]
    from: landing-page
  - id: landing-budget
    name: the landing page stays within its byte budget
    run: [bun, test, tools/build.test.ts]
    tests: [the_landing_page_stays_within_its_byte_budget]
    from: landing-page
  - id: setting-messages
    name: every setting has a label and a help text in every locale
    run: [bun, test, src/i18n/i18n.test.ts]
    tests: [every_setting_has_its_texts_in_every_locale]
    from: player-in-site
  - id: play-e2e
    name: "the player passes the layout checks in both locales, speaks German, keeps its song, and has one bar opposite the piano"
    run: [bun, x, playwright, test, e2e/play.e2e.ts]
    tests: [the_player_passes_the_layout_checks, no_english_text_shows_in_german, the_player_has_one_bar_opposite_the_piano, the_player_keeps_its_song_across_a_visit_to_learn, the_player_follows_the_site_theme]
    from: player-in-site
  - id: progress-store
    name: "the learner's progress survives reloads, upgrades, backups and failed writes"
    run: [bun, test, src/learn/progress/store.test.ts]
    tests: [a_finished_lesson_survives_a_reload, an_older_store_migrates_without_loss, a_backup_restores_every_record, a_failed_write_keeps_the_last_state]
    from: learn-engine
  - id: lesson-model
    name: "every lesson is valid, has its texts in every locale, and names real songs"
    run: [bun, test, src/learn/model.test.ts]
    tests: [every_lesson_of_the_course_is_valid, every_lesson_has_its_texts_in_every_locale, every_song_step_names_a_version_of_ours]
    from: learn-engine
  - id: steps
    name: "each step kind judges the learner's input as the curriculum says"
    run: [bun, test, src/learn/steps/steps.test.ts]
    tests: [find_key_passes_on_the_asked_key_only, play_notes_judges_each_note_in_order, rhythm_tap_judges_against_the_beat, listen_and_quiz_score_one_answer_each, a_hint_shows_after_two_mistakes]
    from: learn-engine
  - id: learn-e2e
    name: "a lesson of each step kind runs to its end, and hands a song to the player"
    run: [bun, x, playwright, test, e2e/learn.e2e.ts]
    tests: [each_step_kind_runs_to_its_end_with_its_solution, a_song_step_opens_the_player_and_returns_its_result, leaving_a_lesson_asks_first]
    from: learn-engine
  - id: learn-layout
    name: a lesson of each step kind passes the layout checks
    run: [bun, x, playwright, test, e2e/learn-layout.e2e.ts]
    tests: [each_step_kind_passes_the_layout_checks]
    from: learn-engine
  - id: xp
    name: "stars, XP and levels are computed from the event log"
    run: [bun, test, src/learn/game/xp.test.ts]
    tests: [stars_follow_accuracy, a_replay_only_raises_the_stars, xp_is_recomputed_from_the_event_log, level_thresholds_rise]
    from: learn-game
  - id: streak
    name: the streak counts local days that met the daily goal
    run: [bun, test, src/learn/game/streak.test.ts]
    tests: [a_day_without_the_daily_goal_ends_the_streak, the_best_streak_is_kept, days_follow_the_local_calendar]
    from: learn-game
  - id: badges
    name: every badge is reachable and earned once
    run: [bun, test, src/learn/game/badges.test.ts]
    tests: [every_badge_is_earned_once, every_badge_has_a_reachable_condition, every_world_has_its_badge]
    from: learn-game
  - id: game-e2e
    name: "the map unlocks, the rewards show, the setup runs once, and every view passes the layout checks"
    run: [bun, x, playwright, test, e2e/game.e2e.ts]
    tests: [the_map_opens_the_next_lesson_after_a_pass, a_skip_test_opens_a_world, a_finished_lesson_shows_its_stars_and_xp, a_new_badge_is_shown_once, the_first_visit_setup_runs_once, a_setup_left_while_it_loads_opens_on_the_next_visit_only, the_map_and_the_profile_pass_the_layout_checks]
    from: learn-game
  - id: first-worlds
    name: "each of the first four worlds has its lessons, its boss and its skip test, in order"
    run: [bun, test, src/learn/course.test.ts]
    tests: [every_world_has_six_to_ten_lessons_a_boss_and_a_skip_test, the_first_four_worlds_are_in_order]
    from: learn-first-steps
  - id: note-names-de
    name: German note names call B an H
    run: [bun, test, src/theory/key.test.ts]
    tests: [german_names_call_b_an_h]
    from: learn-first-steps
  - id: song-explorer-e2e
    name: "the song explorer keeps its place, stars favourites, filters by tag and moves by keyboard"
    run: [bun, x, playwright, test, e2e/song-explorer.e2e.ts]
    tests: [the_explorer_reopens_as_it_was_left_with_the_open_song_marked_and_in_view, the_scroll_and_the_sort_come_back_after_a_close, a_star_makes_a_favourite_that_leads_the_page_and_filters, a_tag_on_a_card_filters_by_it, nothing_found_shows_the_mascot_and_one_way_back, the_arrow_keys_move_through_the_cards_and_enter_opens]
    from: premium-design
  - id: settings-panel-e2e
    name: "the settings panel moves between its groups, finds a setting and resets it"
    run: [bun, x, playwright, test, e2e/settings-panel.e2e.ts]
    tests: [the_panel_moves_between_groups_finds_a_setting_and_resets_it, escape_clears_a_search_before_it_closes_the_panel]
    from: premium-design
  - id: landing-look-e2e
    name: "the landing page shows the mascot, every part before a scroll, and parts that rise in"
    run: [bun, x, playwright, test, e2e/landing.e2e.ts]
    tests: [the_hero_shows_the_mascot_in_each_language, every_part_shows_before_any_scroll, a_part_rises_in_as_it_scrolls_into_view]
    from: premium-design
  - id: library-e2e
    name: the library opens its songs through the explorer
    run: [bun, x, playwright, test, e2e/library.e2e.ts]
    tests: [a_mutopia_piece_shows_its_license_and_credit_and_opens, an_original_piece_comes_first_and_opens_in_two_hands, the_beginner_path_comes_first_and_opens_its_steps, the_library_opens_a_song_at_each_rarity, the_library_lists_the_christmas_songs]
    from: premium-design
  - id: a11y-e2e
    name: "every control of the player has a name and a focus ring, in the new dialogs too"
    run: [bun, x, playwright, test, e2e/a11y.e2e.ts]
    tests: [every_control_has_a_name_and_a_focus_ring]
    from: premium-design
  - id: catalog-fields
    name: "every catalog song names its length, and every version of ours its skills"
    run: [bun, test, tools/our-songs.test.ts]
    tests: [every_catalog_song_names_its_length_and_our_versions_their_skills]
    from: premium-design
  - id: later-worlds
    name: "worlds five to eight follow the first four, each with its lessons, boss and skip test"
    run: [bun, test, src/learn/course.test.ts]
    tests: [every_world_has_six_to_ten_lessons_a_boss_and_a_skip_test, the_eight_worlds_are_in_order]
    from: learn-both-hands
  - id: strength-and-pedal
    name: "a check of touch strength or the pedal judges a MIDI keyboard, and falls back elsewhere"
    run: [bun, test, src/learn/steps/steps.test.ts]
    tests: [play_notes_judges_touch_strength_on_midi, play_notes_judges_the_pedal_on_midi, a_strength_step_falls_back_without_midi]
    from: learn-both-hands
  - id: data-bundle
    name: "one backup file restores every part, never removes newer work, and reads the old files"
    run: [bun, test, src/data/bundle.test.ts]
    tests: [a_bundle_restores_every_part, a_restore_never_removes_newer_progress_or_songs, an_old_settings_or_progress_file_still_restores, a_file_not_ours_changes_nothing]
    from: your-data
  - id: data-page-e2e
    name: "the Data page restores everything after a cleared browser, and the player and the profile lead to it"
    run: [bun, x, playwright, test, e2e/data.e2e.ts]
    tests: [a_backup_restores_everything_after_the_browser_storage_is_cleared, the_player_and_the_profile_lead_to_the_data_page, the_data_page_passes_the_layout_checks]
    from: your-data
  - id: folder-sync
    name: "the folder sync writes a burst once, keeps dated copies, and never overwrites another browser's file"
    run: [bun, test, src/data/folder-sync.test.ts]
    tests: [a_file_another_browser_wrote_is_never_overwritten_unasked, one_dated_copy_a_day_and_the_last_seven_are_kept, changes_in_a_burst_are_written_once]
    from: your-data
  - id: folder-sync-e2e
    name: "a change reaches the folder, and a folder that holds a backup is offered before any write"
    run: [bun, x, playwright, test, e2e/folder-sync.e2e.ts]
    tests: [a_change_reaches_the_folder, a_folder_that_holds_a_backup_offers_its_restore_before_any_write, a_browser_without_folders_shows_only_the_backup_file]
    from: your-data
  - id: landing-player-budget
    name: "the landing page's player stays within its byte budget"
    run: [bun, test, tools/build.test.ts]
    tests: [the_landing_player_stays_within_its_byte_budget]
    from: one-player
  - id: landing-player-e2e
    name: "a landing piano starts the real player on one click, and only one runs at a time"
    run: [bun, x, playwright, test, e2e/landing.e2e.ts]
    tests: [a_landing_piano_starts_the_real_player_on_one_click, only_one_landing_player_runs_at_a_time, the_rarity_switch_shows_its_picture_and_then_plays_its_version]
    from: one-player
  - id: piano-keys
    name: the 3D piano view names its marks and spans its reach
    run: [bun, test, src/render/piano-keys.test.ts]
    tests: [marks_are_named_for_a_screen_reader, the_reach_spans_the_shown_keys, a_mark_takes_its_token_colour]
    from: one-piano
  - id: lesson-on-3d-piano
    name: a lesson step plays on the 3D piano
    run: [bun, x, playwright, test, e2e/lesson-keys.e2e.ts]
    tests: [a_step_shows_the_3d_piano, a_touch_on_a_3d_key_plays_the_step]
    from: one-piano
  - id: devices-on-3d-piano
    name: the landing band loads the 3D piano on a click
    run: [bun, x, playwright, test, e2e/landing.e2e.ts]
    tests: [the_devices_band_loads_the_piano_on_a_click]
    from: one-piano
  - id: hand-model
    name: the hand model fits its budget and carries every bone the runtime reads
    run: [bun, test, src/render/hand/hand-model.test.ts]
    tests: [the_hand_model_fits_its_byte_budget, the_hand_model_has_every_bone_and_marker]
    from: mascot-hand
  - id: models-licensed
    name: the models folder names its license
    run: [bun, test, tools/licenses.test.ts]
    tests: [every_asset_folder_has_a_license_file]
    from: mascot-hand
  - id: hand-rig
    name: the rig puts each pad on its key and mirrors a left hand
    run: [bun, test, src/render/hand/hand-rig.test.ts]
    tests: [pads_reach_the_c_position_keys, a_left_hand_mirrors_the_right, a_relaxed_digit_returns_to_rest, every_nail_lies_on_its_fingertip]
    from: mascot-hand
  - id: hand-plan
    name: "a plan presses each key with its finger at its time, and moves the hand only when it must"
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [a_press_puts_the_pad_on_its_key_at_its_time, the_hand_moves_only_when_a_finger_cannot_reach, a_black_key_is_played_further_in, a_free_finger_hovers_over_its_key, a_seek_gives_the_same_pose_as_playing]
    from: hand-motion
  - id: hand-crossings
    name: "the thumb passes under, a finger crosses over, a chord lands at once"
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [the_thumb_passes_under_the_palm, a_finger_crosses_over_the_thumb, a_chord_lands_its_fingers_together, a_stretch_keeps_the_hand_in_place]
    from: hand-motion
  - id: hand-touch
    name: "staccato, loudness, phrase ends and two hands each move as they should"
    run: [bun, test, src/render/hand/hand-plan.test.ts]
    tests: [staccato_lifts_from_the_wrist, a_loud_note_strikes_faster, a_phrase_ends_with_a_lift, the_two_hands_keep_apart]
    from: hand-motion
  - id: demo-fingers
    name: a demo names a finger for every note or for none
    run: [bun, test, src/learn/model.test.ts]
    tests: [a_demo_names_a_finger_for_every_note_or_none, a_demo_finger_is_one_to_five]
    from: hand-lessons
  - id: demo-hand
    name: "a demo with fingers shows the hand, and slow halves its tempo"
    run: [bun, x, playwright, test, e2e/lesson-keys.e2e.ts]
    tests: [a_demo_with_fingers_shows_the_hand, the_slow_button_plays_the_demo_at_half_speed, a_demo_without_fingers_shows_no_hand]
    from: hand-lessons
  - id: technique-lessons-fingered
    name: "every technique lesson's demos name their fingers"
    run: [bun, test, src/learn/course.test.ts]
    tests: [every_technique_lesson_demo_names_its_fingers]
    from: hand-lessons
  - id: catalog-fallback
    name: "a missing text shows in English, and a page loads only its own catalog"
    run: [bun, test, src/i18n/i18n.test.ts]
    tests: [a_missing_text_shows_in_english, a_page_loads_only_its_own_catalog, every_locale_names_its_plural_forms]
    from: many-locales
  - id: lesson-fallback
    name: a lesson text a locale lacks shows in English
    run: [bun, test, src/learn/model.test.ts]
    tests: [a_missing_lesson_text_shows_in_english]
    from: many-locales
  - id: guide-fallback
    name: a guide text a locale lacks shows in English
    run: [bun, test, tools/our-songs.test.ts]
    tests: [a_guide_without_a_translation_shows_english, a_translated_list_of_another_length_shows_english]
    from: many-locales
  - id: i18n-tool
    name: the translation tool lists missing and stale texts and stamps a unit
    run: [bun, test, tools/i18n.test.ts]
    tests: [status_lists_missing_and_stale_texts, stamp_records_only_the_named_unit, work_lists_each_text_with_its_use]
    from: many-locales
  - id: translation-rules
    name: the rules test fails a broken translation
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [a_text_in_the_wrong_script_fails, a_lost_argument_fails, a_missing_plural_form_fails, a_broken_mark_rule_fails]
    from: many-locales
  - id: pseudo-locale
    name: "no page shows a hard-coded text, and every page holds longer text"
    run: [bun, x, playwright, test, e2e/pseudo.e2e.ts]
    tests: [no_page_shows_a_hard_coded_text, every_page_holds_longer_text]
    from: many-locales
  - id: locale-scripts
    name: "solfège follows the locale's script, and the Latin font covers every Latin locale"
    run: [bun, test, src/theory/note-names.test.ts, tools/font-coverage.test.ts]
    tests: [solfege_follows_the_locale_script, a_new_learner_gets_the_locale_naming_system, the_latin_font_covers_every_latin_locale]
    from: many-locales
  - id: spanish-rules
    name: every Spanish text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [spanish_texts_keep_their_rules]
    from: spanish
  - id: spanish-site
    name: the Spanish site reads in Spanish
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_spanish_site_reads_in_spanish]
    from: spanish
  - id: chinese-rules
    name: every Chinese text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [chinese_texts_keep_their_rules]
    from: chinese
  - id: chinese-site
    name: the Chinese site reads in Chinese
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_chinese_site_reads_in_chinese]
    from: chinese
  - id: hindi-rules
    name: every Hindi text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [hindi_texts_keep_their_rules]
    from: hindi
  - id: hindi-site
    name: the Hindi site reads in Hindi
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_hindi_site_reads_in_hindi]
    from: hindi
  - id: css-sides
    name: no stylesheet names a physical side unless it says why
    run: [bun, test, tools/css-sides.test.ts]
    tests: [no_stylesheet_uses_a_physical_side]
    from: right-to-left
  - id: rtl-pages
    name: "a right-to-left page mirrors, and the music never does"
    run: [bun, x, playwright, test, e2e/rtl.e2e.ts]
    tests: [a_right_to_left_page_mirrors_its_layout, the_piano_and_the_staff_never_mirror, a_directional_icon_points_the_reading_way]
    from: right-to-left
  - id: isolate
    name: an argument in a right-to-left text is isolated
    run: [bun, test, src/i18n/format.test.ts]
    tests: [isolate_wraps_text_in_first_strong_isolates]
    from: right-to-left
  - id: arabic-rules
    name: every Arabic text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [arabic_texts_keep_their_rules]
    from: arabic
  - id: arabic-site
    name: the Arabic site reads in Arabic
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_arabic_site_reads_in_arabic]
    from: arabic
  - id: portuguese-rules
    name: every Portuguese text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [portuguese_texts_keep_their_rules]
    from: portuguese
  - id: portuguese-site
    name: the Portuguese site reads in Portuguese
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_portuguese_site_reads_in_portuguese]
    from: portuguese
  - id: indonesian-rules
    name: every Indonesian text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [indonesian_texts_keep_their_rules]
    from: indonesian
  - id: indonesian-site
    name: the Indonesian site reads in Indonesian
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_indonesian_site_reads_in_indonesian]
    from: indonesian
  - id: bengali-rules
    name: every Bengali text keeps the rules of its style guide
    run: [bun, test, src/i18n/translation-rules.test.ts]
    tests: [bengali_texts_keep_their_rules]
    from: bengali
  - id: bengali-site
    name: the Bengali site reads in Bengali
    run: [bun, x, playwright, test, e2e/locales.e2e.ts]
    tests: [the_bengali_site_reads_in_bengali]
    from: bengali
---
<!-- Generated by `looper render` from the front matter above and the goal files. Edit those, not this. -->

# Goals

The chain holds 4 goal(s). `russian` is live.

| # | Goal | Reached when | Stages |
|---|---|---|---|
| 1 | [`russian`](russian.md) **live** | Every text of the site, the course and the song guides reads in Russian as if a native teacher wrote it, and the Russian site ships. | 1 ✓ The Russian style guide and glossary · 2 ✓ The site and the player in Russian · 3 ✓ The course in Russian · **4 The song guides in Russian, from a to m** · 5 The song guides in Russian, from n to z · 6 The Russian site ships · 7 the goal is verified once, and every failure is fixed |
| 2 | [`french`](french.md) | Every text of the site, the course and the song guides reads in French as if a native teacher wrote it, and the French site ships. | **1 The French style guide and glossary** · 2 The site and the player in French · 3 The course in French · 4 The song guides in French, from a to m · 5 The song guides in French, from n to z · 6 The French site ships · 7 the goal is verified once, and every failure is fixed |
| 3 | [`urdu`](urdu.md) | Every text of the site, the course and the song guides reads in Urdu as if a native teacher wrote it, and the Urdu site ships. | **1 The Urdu style guide and glossary** · 2 The site and the player in Urdu · 3 The course in Urdu · 4 The song guides in Urdu, from a to m · 5 The song guides in Urdu, from n to z · 6 The Urdu site ships · 7 the goal is verified once, and every failure is fixed |
| 4 | [`japanese`](japanese.md) | Every text of the site, the course and the song guides reads in Japanese as if a native teacher wrote it, and the Japanese site ships. | **1 The Japanese style guide and glossary** · 2 The site and the player in Japanese · 3 The course in Japanese · 4 The song guides in Japanese, from a to m · 5 The song guides in Japanese, from n to z · 6 The Japanese site ships · 7 the goal is verified once, and every failure is fixed |

The floor holds 119 check(s) carried from reached goals; every goal keeps them green.
The format is `docs/goal-format.md`.
