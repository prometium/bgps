package com.lab.system.dao;

import com.lab.system.model.StudyGroup;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class StudyGroupJdbc {

    private final JdbcTemplate jdbcTemplate;
    private final SimpleJdbcInsert simpleJdbcInsert;

    public StudyGroupJdbc(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource).withTableName("study_group");
    }

    public void create(StudyGroup studyGroup) {
        Map<String, Object> parameters = new HashMap<String, Object>();

        parameters.put("id", studyGroup.getId());
        parameters.put("name", studyGroup.getName());

        simpleJdbcInsert.execute(parameters);
    }

    public List<StudyGroup> getAll() {
        return jdbcTemplate.query(
                "SELECT * FROM study_group",
                this::mapStudyGroup
        );
    }

    public StudyGroup get(int id) {
        return jdbcTemplate.queryForObject(
                "SELECT * FROM study_group WHERE id = ?",
                this::mapStudyGroup, id
        );
    }

    private StudyGroup mapStudyGroup(ResultSet rs, int i) throws SQLException {
        return new StudyGroup(
                rs.getInt("id"),
                rs.getString("name")
        );
    }

    public void update(int id, StudyGroup studyGroup) {
        jdbcTemplate.update(
                "UPDATE study_group SET name = ? WHERE id = ?",
                studyGroup.getName(), studyGroup.getId()
        );
    }

    public void delete(int id) {
        jdbcTemplate.update(
                "DELETE FROM study_group WHERE id = ?",
                id
        );
    }
}
