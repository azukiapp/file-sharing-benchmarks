/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  example: {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "iozone",
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "# command to run app",
    wait: {"retry": 20, "timeout": 1000},
    mounts: {
      // For virtualbox shared folder test
      // '/azk/#{manifest.dir}': path(".", {vbox: true}),

      // For other file sharing, usual mount configuration
      '/azk/#{manifest.dir}': path("."),
    },
  },
});



