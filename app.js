document.addEventListener('DOMContentLoaded', () => {
    const machineSelect = document.getElementById('machine-select');
    const componentsContainer = document.getElementById('components-container');

    // 1. Populate the dropdown menu with models from machineData
    machineData.forEach((model, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = model.modelName;
        machineSelect.appendChild(option);
    });

    // 2. Function to display the components of a model
    function displayComponents(modelIndex) {
        const selectedModelData = machineData[modelIndex];
        if (!selectedModelData) return;

        // Map abbreviations to full text and CSS classes for maintainability
        const statusMap = {
            'std': { text: 'standard', className: 'standard' },
            'opt': { text: 'optional', className: 'optional' },
            'na': { text: 'not available', className: 'not-available' }
        };

        // Create a URL-friendly name for the image file from the model name
        const modelImageName = selectedModelData.modelName
            .toLowerCase()
            .replace(/\//g, '-') // Replace slashes (e.g., "Top/Maxi")
            .replace(/ /g, '-');  // Replace spaces
        
        // Assume images are in an 'images' folder with a .png extension
        const imagePath = `images/${modelImageName}.png`;

        let titleHtml = `<h2>${selectedModelData.modelName}</h2><img src="${imagePath}" alt="Immagine di ${selectedModelData.modelName}" class="model-image" onerror="this.style.display='none'">`;

        // Check if any component in the entire model has notes to decide if the note column should be shown
        const anyNotesInModel = Object.keys(componentStructure).some(className => {
            const subclasses = componentStructure[className];
            return Object.keys(subclasses).some(subclassName => {
                return subclasses[subclassName].some(componentName => {
                    const statusData = selectedModelData.statuses[className]?.[subclassName]?.[componentName] || {};
                    return (statusData.status || '').includes('*');
                });
            });
        });
        const tableColspan = anyNotesInModel ? 4 : 3;
        const tableClass = anyNotesInModel ? '' : 'table-no-notes';

        // Define visual groups for component sections
        const componentGroups = [
            ['Capacity'],
            ['Special configuration'],
            ['frame', 'cladding'],
            ['compressors', 'inverters', 'oil management'],
            ['Gas Cooler section', 'Intercooler Section', 'Muffler on LT discharge'],
            ['Regenerative exchanger'],
            ['Heat recovery n°1', 'Heat recovery n°2', 'Heat recoveries global bypass (emergency)'],
            ['HPV-IPV'],
            ['Liquid receiver and Liquid indicator', 'Liquid Subcooler'],
            ['Connections to evaporators', 'LT return line', 'MT return line'],
            ['Backup unit'],
            ['Electrical Panel (EP)', 'Wiring'],
            ['Ducting', 'Safety Valves'],
            ['Complementary']
        ];

        let tablesHtml = '';

        let subCardCounter = 0;

        // Iterate through the defined groups to build the tables
        componentGroups.forEach(group => {
            // Each group is a separate table (card)
            tablesHtml += `<table class="single-view-table ${tableClass}">`;

            group.forEach(className => {
                if (!componentStructure[className]) return;

                // Each main category is a collapsible tbody, collapsed by default
                tablesHtml += `<tbody class="collapsible-section collapsed">`;

                // Main category row (old card title)
                const sectionTitleText = capitalize(className);

                const iconMap = {
                    'compressors': 'compressors-icon.png',
                    'inverters': 'inverters-icon.png',
                    'oil management': 'oil-management-icon.png',
                    'gas cooler section': 'gas-cooler-section-icon.png',
                    'intercooler section': 'intercooler-section-icon.png',
                    'muffler on lt discharge': 'muffler-on-lt-discharge-icon.png',
                    'regenerative exchanger': 'regenerative-exchanger-icon.png',
                    'heat recovery n°1': 'heat-recovery-n-1-icon.png',
                    'heat recovery n°2': 'heat-recovery-n-2-icon.png',
                    'heat recoveries global bypass (emergency)': 'heat-recoveries-global-bypass-emergency-icon.png',
                    'hpv-ipv': 'hpv-ipv-icon.png',
                    'liquid receiver and liquid indicator': 'liquid-receiver-and-liquid-indicator-icon.png',
                    'liquid subcooler': 'liquid-subcooler-icon.png',
                    'backup unit': 'backup-unit-icon.png',
                    'electrical panel (ep)': 'electrical-panel-ep-icon.png'
                };
                const iconFile = iconMap[className.toLowerCase()];
                let iconHtml = '';
                if (iconFile) {
                    iconHtml = `<img src="icons/${iconFile}" class="section-icon" alt="${sectionTitleText} icon" onerror="this.style.display='none'">`;
                }
                tablesHtml += `<tr class="main-category-row"><td colspan="${tableColspan}"><h3><span class="icon-wrapper">${iconHtml}</span>${sectionTitleText}</h3></td></tr>`;

                const subclasses = componentStructure[className];
                
                for (const subclassName in subclasses) {
                // Use a counter to alternate background colors for each sub-card group
                const rowClass = subCardCounter % 2 === 0 ? 'row-bg-even' : 'row-bg-odd';

                const componentList = subclasses[subclassName];

                const isStandaloneComponent = componentList.length === 1 && componentList[0] === subclassName;
                
                if (isStandaloneComponent) {
                    const componentName = subclassName;
                    const statusData = selectedModelData.statuses[className]?.[subclassName]?.[componentName] || {};
                    const rawStatus = statusData.status || 'na';
                    const note = statusData.note || '';
                    const details = statusData.details || '';
                    const value = statusData.value;

                    const hasNote = !!note || rawStatus.includes('*');
                    const hasDetails = !!details;

                    let indicatorHtml;
                    const noteHtml = hasNote && note ? `<span class="note-text">${note}</span>` : '';
                    const asteriskHtml = hasNote ? '<span class="note-asterisk">*</span>' : '';

                    if (value !== undefined) {
                        indicatorHtml = `<span class="status-value">${value}</span>${asteriskHtml}`;
                    } else {
                        const statusAbbr = rawStatus.replace('*', '');
                        const statusInfo = statusMap[statusAbbr] || statusMap['na'];
                        let dotOrDash = (statusAbbr === 'na')
                            ? `<span class="status-dash" title="${capitalize(statusInfo.text)}">-</span>`
                            : `<span class="status-dot status-${statusInfo.className}" title="${capitalize(statusInfo.text)}"></span>`;
                        indicatorHtml = `${dotOrDash}${asteriskHtml}`;
                    }

                    const expandableClass = hasDetails ? 'expandable' : '';
                    const arrowHtml = hasDetails ? ' <span class="expand-arrow">▶</span>' : '';
                    const popoverHtml = hasDetails ? `<div class="details-popover">${details}</div>` : '';
                    
                    tablesHtml += `<tr class="${rowClass} ${expandableClass}">`;
                    tablesHtml += `<td class="sub-category-title-cell component-cell-relative"><h4>${capitalize(componentName)}${arrowHtml}</h4>${popoverHtml}</td>`;
                    tablesHtml += `<td></td>`; // Empty component cell
                    tablesHtml += `
                        <td class="status-indicator-cell">${indicatorHtml}</td>
                        <td class="note-cell">${noteHtml}</td>
                    `;
                    tablesHtml += `</tr>`;
                } else {
                    const hasTitle = true;
                    componentList.forEach((componentName, index) => {
                        const statusData = selectedModelData.statuses[className]?.[subclassName]?.[componentName] || {};
                        const rawStatus = statusData.status || 'na';
                        const note = statusData.note || '';
                        const details = statusData.details || '';
                        const value = statusData.value;

                        const hasNote = !!note || rawStatus.includes('*');
                        const hasDetails = !!details;

                        let indicatorHtml;
                        const noteHtml = hasNote && note ? `<span class="note-text">${note}</span>` : '';
                        const asteriskHtml = hasNote ? '<span class="note-asterisk">*</span>' : '';

                        if (value !== undefined) {
                            indicatorHtml = `<span class="status-value">${value}</span>${asteriskHtml}`;
                        } else {
                            const statusAbbr = rawStatus.replace('*', '');
                            const statusInfo = statusMap[statusAbbr] || statusMap['na'];
                            let dotOrDash = (statusAbbr === 'na')
                                ? `<span class="status-dash" title="${capitalize(statusInfo.text)}">-</span>`
                                : `<span class="status-dot status-${statusInfo.className}" title="${capitalize(statusInfo.text)}"></span>`;
                            indicatorHtml = `${dotOrDash}${asteriskHtml}`;
                        }

                        const expandableClass = hasDetails ? 'expandable' : '';
                        const arrowHtml = hasDetails ? ' <span class="expand-arrow">▶</span>' : '';
                        const popoverHtml = hasDetails ? `<div class="details-popover">${details}</div>` : '';

                        tablesHtml += `<tr class="${rowClass} ${expandableClass}">`;
                        if (index === 0) {
                            const titleContent = hasTitle ? `<h4>${capitalize(subclassName)}</h4>` : '';
                            tablesHtml += `<td rowspan="${componentList.length}" class="sub-category-title-cell">${titleContent}</td>`;
                        }
                        tablesHtml += `<td class="component-cell-relative">${componentName}${arrowHtml}${popoverHtml}</td>`;
                        tablesHtml += `
                            <td class="status-indicator-cell">${indicatorHtml}</td>
                            <td class="note-cell">${noteHtml}</td>
                        `;
                        tablesHtml += `</tr>`;
                    });
                }
                subCardCounter++;
                }
                tablesHtml += `</tbody>`; // Close the tbody for this section
            });

            tablesHtml += `</table>`;
        });

        componentsContainer.innerHTML = titleHtml + tablesHtml;

        // Add event listeners to make sections collapsible
        const sectionHeaders = document.querySelectorAll('.main-category-row');
        sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                // The tbody is the parent of the clicked tr
                header.parentElement.classList.toggle('collapsed');
            });
        });

        // Add event listeners for expandable arrows to show popovers
        const expandableArrows = document.querySelectorAll('.expand-arrow');
        expandableArrows.forEach(arrow => {
            arrow.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from bubbling to parent (like the collapsible section header)

                const parentCell = arrow.closest('.component-cell-relative');
                const popover = parentCell.querySelector('.details-popover');

                if (popover) {
                    const isVisible = popover.classList.contains('show');

                    // First, hide all other open popovers and reset their arrows
                    document.querySelectorAll('.details-popover.show').forEach(p => p.classList.remove('show'));
                    document.querySelectorAll('.expand-arrow').forEach(a => a.style.transform = 'rotate(0deg)');

                    // If the clicked popover was not visible, show it and rotate its arrow
                    if (!isVisible) {
                        popover.classList.add('show');
                        arrow.style.transform = 'rotate(90deg)';
                    }
                }
            });
        });

        // Add a global click listener to close popovers when clicking outside
        document.addEventListener('click', (e) => {
            // If the click is not on an arrow or inside a popover, close all popovers
            if (!e.target.matches('.expand-arrow') && !e.target.closest('.details-popover')) {
                document.querySelectorAll('.details-popover.show').forEach(p => p.classList.remove('show'));
                document.querySelectorAll('.expand-arrow').forEach(a => a.style.transform = 'rotate(0deg)');
            }
        });
    }

    // Helper function to capitalize the first letter
    function capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // 3. Listen for changes in the dropdown menu and update the view
    machineSelect.addEventListener('change', (event) => {
        displayComponents(event.target.value);
    });

    // Display components for the first model on initial load
    if (machineData.length > 0) {
        displayComponents(0);
    }
});
